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
import {
  ScreenContainer,
  Title,
  Subtitle,
  ScrollContainer,
  Section,
  SectionTitle,
  SectionItem,
  ItemText,
} from './styles';

import {Icon, LocaleModal, CurrencyModal} from './modal';

const locales = {
  es: 'Español',
  en: 'English',
} as any;

const Profile = (props: any) => {
  const {
    email = 'michael.lawson@reqres.in',
    first_name = 'Michael J',
    last_name = 'Lawson',
    currency,
  } = useSelector((state: any) => state.user);

  const {navigation} = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [locale, setLocale] = useState<string>(i18n.locale);
  const [localeModal, setLocaleModal] = useState<boolean>(false);
  const [currencyModal, setCurrencyModal] = useState<boolean>(false);

  const {getItem: getLocaleStorage, setItem: setLocaleStorage} =
    useAsyncStorage(storage.LOCALE);
  const {getItem: getCurrencyStorage, setItem: setCurrencyStorage} =
    useAsyncStorage(storage.CURRENCY);

  const {navigate = () => {}} = {...navigation};

  const readLocaleFromStorage = async () => {
    const item = await getLocaleStorage();
    setLocale(item || 'es');
  };

  const readCurrencyFromStorage = async () => {
    const item = await getCurrencyStorage();
    setCurrency(item || 'cop');
  };

  const toggleLocaleModal = () => setLocaleModal(!localeModal);
  const toggleCurrencyModal = () => setCurrencyModal(!currencyModal);

  useEffect(() => {
    readLocaleFromStorage();
    readCurrencyFromStorage();
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
    setCurrencyStorage(value);
    toggleCurrencyModal();
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
        <Title>
          {first_name} {last_name}
        </Title>
        <Subtitle>{email}</Subtitle>
        <Section>
          <SectionTitle>{i18n.t('profile.account')}</SectionTitle>
          <SectionItem onPress={toggleCurrencyModal}>
            <Icon name={'currency-usd'} />
            <ItemText>{i18n.t(`currency.${currency}`)}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem onPress={toggleLocaleModal}>
            <Icon name={'translate'} />
            <ItemText>{locales[i18n.locale]}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          {/*<SectionItem>
            <Icon name={'bell-outline'} />
            <ItemText>{'Notificaciones'}</ItemText>
  </SectionItem>*/}
        </Section>
        <Section>
          <SectionItem onPress={() => navigate(screen.CHANGE_PASSWORD)}>
            <Icon name={'lock-open-outline'} />
            <ItemText>{i18n.t('profile.changePassword')}</ItemText>
          </SectionItem>
        </Section>
        <Section>
          <SectionTitle>{i18n.t('profile.about')}</SectionTitle>
          <SectionItem
            onPress={() => Linking.openURL('https://www.nolineal.co/contact')}>
            <Icon name={'help-circle-outline'} />
            <ItemText>{i18n.t('profile.help')}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem
            onPress={() => Linking.openURL('https://www.nolineal.co/projects')}>
            <Icon name={'file-certificate-outline'} />
            <ItemText>{i18n.t('profile.legal')}</ItemText>
            <Icon name={'chevron-right'} color={theme.colors.romantic} />
          </SectionItem>
          <SectionItem
            onPress={() => Linking.openURL('mailto:comments@haibu.app')}>
            <Icon name={'comment-outline'} />
            <ItemText>{i18n.t('profile.comments')}</ItemText>
          </SectionItem>
          {/*<SectionItem>
            <Icon name={'coffee-outline'} />
            <ItemText>{'Comprame un Cafe'}</ItemText>
  </SectionItem>*/}
        </Section>
        <Section>
          <SectionItem>
            <Icon name={'logout-variant'} />
            <ItemText>{i18n.t('profile.logout')}</ItemText>
          </SectionItem>
        </Section>
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
