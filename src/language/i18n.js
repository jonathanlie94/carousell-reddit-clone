import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import idLocaleData from 'react-intl/locale-data/id';

import { DEFAULT_LOCALE } from './LanguageProvider/constants';

import enTranslationMessages from './translations/en.json';
import idTranslationMessages from './translations/id.json';

addLocaleData(enLocaleData);
addLocaleData(idLocaleData);

export const appLocales = ['en', 'id'];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  id: formatTranslationMessages('id', idTranslationMessages),
};
