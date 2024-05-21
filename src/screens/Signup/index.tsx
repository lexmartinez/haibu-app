import React, {useState, useEffect, useRef} from 'react';
import {View, StatusBar, Keyboard} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import useAuthService from '~/services/auth';
import i18n from '~/config/i18n';
import withLoader from '~/hoc/withLoader';
import {EMAIL_REGEX} from '~/config/constants';
import currencies from '~/config/currencies';
import {LoginProps} from './typings';
import {CurrencyModal} from '~screens/Profile/modal';
import {
  ScreenContainer,
  Container,
  Title,
  Subtitle,
  Button,
  ButtonText,
  InputContainer,
  IconContainer,
  InputText,
  HeadContainer,
  FormContainer,
  CurrencyText,
  ErrorText,
  InputButtonContainer,
  Spacer,
  CloseButton,
} from './styles';

const Login = (props: LoginProps) => {
  const theme = useTheme();
  const authService = useAuthService();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [password2, setPassword2] = useState<string>();
  const [currency, setCurrency] = useState<string>('cop');
  const [sent, setSent] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [keyboard, setKeyboard] = useState<boolean>();
  const [currencyModal, setCurrencyModal] = useState<boolean>(false);
  const formRef = useRef<any>(null);
  const {navigation = {}} = props;
  const {pop = () => {}} = {...navigation};
  const toggleCurrencyModal = () => setCurrencyModal(!currencyModal);

  const onSignUp = async () => {
    setSent(true);

    if (
      email &&
      password &&
      name &&
      currency &&
      password2 === password &&
      EMAIL_REGEX.test(email)
    ) {
      const success = await authService.signup(email, password, name, currency);
      if (success) {
        await authService.login(email, password);
      } else {
        setError(true);
      }
    }
  };

  const onSelectCurrency = (value: string) => {
    setCurrency(value);
    setCurrencyModal(false);
  };

  const _keyboardDidShow = () => {
    setKeyboard(true);
  };

  const _keyboardDidHide = () => {
    setKeyboard(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScreenContainer>
      <StatusBar barStyle={'light-content'} />
      <Container>
        <CloseButton onPress={() => pop()}>
          <MIcon name={'close'} size={28} color={theme.colors.gray} />
        </CloseButton>
        <FormContainer
          bounces={false}
          showsVerticalScrollIndicator={false}
          ref={formRef}
          onContentSizeChange={() =>
            formRef && formRef?.current?.scrollToEnd({animated: true})
          }>
          <View>
            <HeadContainer>
              <MIcon
                name={'rocket-launch'}
                size={48}
                color={theme.colors.saffron}
              />
              <Title>{i18n.t('signup.title')}</Title>
              <Subtitle>{i18n.t('signup.subtitle')}</Subtitle>
            </HeadContainer>

            <InputContainer>
              <IconContainer>
                <MIcon
                  name={'account-outline'}
                  size={20}
                  color={
                    (sent && !name) || error
                      ? theme.colors.salmon
                      : theme.colors.saffron
                  }
                />
              </IconContainer>
              <InputText
                placeholder={i18n.t('signup.fullName')}
                placeholderTextColor={theme.colors.gray}
                keyboardAppearance={'dark'}
                value={name}
                onChangeText={(val: string) => setName(val)}
              />
            </InputContainer>

            <InputContainer>
              <IconContainer>
                <MIcon
                  name={'email-outline'}
                  size={20}
                  color={
                    (sent && (!email || !EMAIL_REGEX.test(email))) || error
                      ? theme.colors.salmon
                      : theme.colors.saffron
                  }
                />
              </IconContainer>
              <InputText
                placeholder={i18n.t('signup.email')}
                placeholderTextColor={theme.colors.gray}
                inputMode={'email'}
                keyboardAppearance={'dark'}
                keyboardType={'email-address'}
                value={email}
                autoCapitalize={'none'}
                onChangeText={(val: string) => setEmail(val)}
              />
            </InputContainer>
            <InputContainer>
              <IconContainer>
                <MIcon
                  name={'lock-outline'}
                  size={20}
                  color={
                    (sent && !password) || error
                      ? theme.colors.salmon
                      : theme.colors.saffron
                  }
                />
              </IconContainer>
              <InputText
                placeholder={i18n.t('signup.password')}
                placeholderTextColor={theme.colors.gray}
                keyboardAppearance={'dark'}
                secureTextEntry={true}
                value={password}
                onChangeText={(val: string) => setPassword(val)}
              />
            </InputContainer>
            <InputContainer>
              <IconContainer>
                <MIcon
                  name={'lock-check-outline'}
                  size={20}
                  color={
                    (sent && !password2) || error
                      ? theme.colors.salmon
                      : theme.colors.saffron
                  }
                />
              </IconContainer>
              <InputText
                placeholder={i18n.t('signup.confirmPassword')}
                placeholderTextColor={theme.colors.gray}
                keyboardAppearance={'dark'}
                secureTextEntry={true}
                value={password2}
                onChangeText={(val: string) => setPassword2(val)}
              />
            </InputContainer>
            <InputButtonContainer
              activeOpacity={0.8}
              onPress={toggleCurrencyModal}>
              <IconContainer>
                <MIcon
                  name={'circle-multiple-outline'}
                  size={20}
                  color={
                    (sent && !currency) || error
                      ? theme.colors.salmon
                      : theme.colors.saffron
                  }
                />
              </IconContainer>
              <CurrencyText>
                {i18n.t(`currency.${currency}`)} ({currencies[currency].code})
              </CurrencyText>
            </InputButtonContainer>
          </View>
          {error && <ErrorText>{i18n.t('signup.error')}</ErrorText>}
          <Button onPress={onSignUp} activeOpacity={0.8}>
            <ButtonText>{i18n.t('signup.button')}</ButtonText>
          </Button>
          {keyboard && <Spacer />}
        </FormContainer>
      </Container>
      <CurrencyModal
        open={currencyModal}
        onClose={toggleCurrencyModal}
        currencies={currencies}
        currency={currency}
        setCurrency={onSelectCurrency}
      />
    </ScreenContainer>
  );
};
export default withLoader(Login);
