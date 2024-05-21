import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StatusBar, Keyboard} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import useAuthService from '~/services/auth';
import i18n from '~/config/i18n';
import withLoader from '~/hoc/withLoader';
import {EMAIL_REGEX, screen} from '~/config/constants';
import {LoginProps} from './typings';
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
  Link,
  ButtonOutline,
  ButtonOutlineText,
  HeadContainer,
  FormContainer,
  ErrorText,
  FormTitle,
} from './styles';

const Login = (props: LoginProps) => {
  const {navigation} = props;
  const theme = useTheme();
  const authService = useAuthService();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [sent, setSent] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [keyboard, setKeyboard] = useState<boolean>(false);

  const {navigate = () => {}} = {...navigation};

  const onLogin = async () => {
    setSent(true);
    if (email && password && EMAIL_REGEX.test(email)) {
      const success = await authService.login(email, password);
      setError(!success);
    }
  };

  const _keyboardDidShow = () => {
    setKeyboard(true);
  };

  const _keyboardDidHide = () => {
    setKeyboard(false);
  };

  const onSignUp = () => {
    navigate(screen.SIGNUP);
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
        <HeadContainer keyboard={keyboard}>
          <MIcon name={'bee'} size={100} color={theme.colors.saffron} />
          <Title>{i18n.t('login.title')}</Title>
          <Subtitle>{i18n.t('login.subtitle')}</Subtitle>
        </HeadContainer>
        <FormContainer>
          <FormTitle>{i18n.t('login.form')}</FormTitle>
          <InputContainer>
            <IconContainer>
              <MIcon
                name={'email-outline'}
                size={20}
                color={
                  (sent && (!email || !EMAIL_REGEX.test(email))) || error
                    ? theme.colors.pomegranate
                    : theme.colors.saffron
                }
              />
            </IconContainer>
            <InputText
              placeholder={i18n.t('login.email')}
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
                    ? theme.colors.pomegranate
                    : theme.colors.saffron
                }
              />
            </IconContainer>
            <InputText
              placeholder={i18n.t('login.password')}
              placeholderTextColor={theme.colors.gray}
              keyboardAppearance={'dark'}
              secureTextEntry={true}
              value={password}
              onChangeText={(val: string) => setPassword(val)}
            />
          </InputContainer>
          {error && <ErrorText>{i18n.t('login.error')}</ErrorText>}
          <Button onPress={onLogin} activeOpacity={0.8}>
            <ButtonText>{i18n.t('login.button')}</ButtonText>
          </Button>
          <TouchableOpacity>
            <Link>{i18n.t('login.forgot')}</Link>
          </TouchableOpacity>
          <ButtonOutline onPress={onSignUp}>
            <ButtonOutlineText>{i18n.t('login.signup')}</ButtonOutlineText>
          </ButtonOutline>
        </FormContainer>
      </Container>
    </ScreenContainer>
  );
};
export default withLoader(Login);
