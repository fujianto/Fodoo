import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './translations/en.json';
import id from './translations/id.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, id };

export default i18n;