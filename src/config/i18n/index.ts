import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import es from './es';
import en from './en';
import {storage} from '~/config/constants';

const i18n = new I18n({
  es,
  en,
});

const locales = RNLocalize.getLocales();
let localizedLocale = 'es';
i18n.defaultLocale = 'es';

if (Array.isArray(locales)) {
  localizedLocale = locales[0].languageCode || 'es';
}

AsyncStorage.getItem(storage.LOCALE)
  .then((value) => {
    i18n.locale = value || localizedLocale;
    if (!value) {
      AsyncStorage.setItem(storage.LOCALE, localizedLocale);
    }
  })
  .catch((_) => {
    i18n.locale = localizedLocale;
  });

export default i18n;
