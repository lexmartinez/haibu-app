import React, {useState, useEffect} from 'react';
import {Alert, Linking} from 'react-native';
import {useTheme} from 'styled-components';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {useDispatch, useSelector} from 'react-redux';
import {storage, screen, appName} from '~/config/constants';
import currencies from '~/config/currencies';
import i18n from '~/config/i18n';
import {setCurrency as setCurrencyAction} from '~/store/user';
import useAuthService from '~/services/auth';
import {USER_SELECTOR} from '~/store/selectors/user';
import {
  ScreenContainer,
  Title,
  Subtitle,
  ScrollContainer,
  Section,
  SectionTitle,
  SectionItem,
  ItemText,
  Spacer,
} from './styles';

import {LocaleModal, CurrencyModal} from './modal';
import {ProfileProps} from './typings';
import {Icon} from '~/components/Icon';

const locales = {
  es: 'Español',
  en: 'English',
} as any;

const Profile = (props: ProfileProps) => {
  const {
    email = '',
    fullName = '',
    currency = '',
  }: any = useSelector(USER_SELECTOR);

  const {navigation} = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [locale, setLocale] = useState<string>(i18n.locale);
  const [localeModal, setLocaleModal] = useState<boolean>(false);
  const [currencyModal, setCurrencyModal] = useState<boolean>(false);
  const authService = useAuthService();

  const {getItem: getLocaleStorage, setItem: setLocaleStorage} =
    useAsyncStorage(storage.LOCALE);

  const {navigate = () => {}} = {...navigation};

  const readLocaleFromStorage = async () => {
    const item = await getLocaleStorage();
    setLocale(item || 'es');
  };

  const toggleLocaleModal = () => setLocaleModal(!localeModal);
  const toggleCurrencyModal = () => setCurrencyModal(!currencyModal);

  useEffect(() => {
    readLocaleFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restartApp = () => {
    Alert.alert(appName, i18n.t('profile.restart', {appName}), [
      {text: i18n.t('global.button.cancel'), style: 'cancel'},
      {
        text: i18n.t('global.button.ok'),
        onPress: () => {
          RNRestart.restart();
        },
      },
    ]);
  };

  const setCurrency = (value: string) => {
    dispatch(setCurrencyAction(value));
    setCurrencyModal(false);
  };

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (locale !== i18n.locale) {
      i18n.locale = locale;
      setLocaleStorage(locale, restartApp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <ScreenContainer>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <Title>{fullName}</Title>
        <Subtitle>{email}</Subtitle>
        <Section>
          <SectionTitle>{i18n.t('profile.account')}</SectionTitle>
          <SectionItem onPress={toggleCurrencyModal} disabled={true}>
            <Icon name={'circle-multiple-outline'} />
            <ItemText>
              {currency ? i18n.t(`currency.${currency}`) : '---'} (
              {currency ? currencies[currency].code : '--'})
            </ItemText>
            {/*<Icon name={'chevron-right'} color={theme.colors.saffron} />*/}
          </SectionItem>
          <SectionItem onPress={toggleLocaleModal} activeOpacity={0.8}>
            <Icon name={'translate'} />
            <ItemText>{locales[i18n.locale]}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.saffron} />
          </SectionItem>
          {/*<SectionItem>
            <Icon name={'bell-outline'} />
            <ItemText>{'Notificaciones'}</ItemText>
  </SectionItem>*/}
        </Section>
        <Section>
          <SectionItem
            onPress={() => navigate(screen.CHANGE_PASSWORD)}
            activeOpacity={0.8}>
            <Icon name={'lock-open-outline'} />
            <ItemText>{i18n.t('profile.changePassword')}</ItemText>
          </SectionItem>
        </Section>
        <Section>
          <SectionTitle>{i18n.t('profile.about')}</SectionTitle>
          <SectionItem
            onPress={() => Linking.openURL('https://www.nolineal.co/contact')}
            activeOpacity={0.8}>
            <Icon name={'help-circle-outline'} />
            <ItemText>{i18n.t('profile.help')}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.saffron} />
          </SectionItem>
          <SectionItem
            onPress={() => Linking.openURL('https://www.nolineal.co/projects')}
            activeOpacity={0.8}>
            <Icon name={'file-certificate-outline'} />
            <ItemText>{i18n.t('profile.legal')}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.saffron} />
          </SectionItem>
          <SectionItem
            onPress={() => Linking.openURL('mailto:comments@haibu.app')}
            activeOpacity={0.8}>
            <Icon name={'comment-outline'} />
            <ItemText>{i18n.t('profile.comments')}</ItemText>
          </SectionItem>
          {/*<SectionItem>
            <Icon name={'coffee-outline'} />
            <ItemText>{'Comprame un Cafe'}</ItemText>
  </SectionItem>*/}
        </Section>
        <Section>
          <SectionItem onPress={onLogout} activeOpacity={0.8}>
            <Icon name={'logout-variant'} />
            <ItemText>{i18n.t('profile.logout')}</ItemText>
          </SectionItem>
        </Section>
        <Spacer />
      </ScrollContainer>
      <LocaleModal
        open={localeModal}
        onClose={toggleLocaleModal}
        locales={locales}
        setLocale={setLocale}
      />
      <CurrencyModal
        open={currencyModal}
        onClose={toggleCurrencyModal}
        currencies={currencies}
        currency={currency}
        setCurrency={setCurrency}
      />
    </ScreenContainer>
  );
};
export default Profile;
