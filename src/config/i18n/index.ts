import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import es from './es';
import en from './en';

const i18n = new I18n({
  es,
  en,
});

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageCode;
}

i18n.defaultLocale = 'es';

export default i18n;
