import translations from 'i18n';

const currentLanguage = 'es';

function translate(key) {
  const string = [currentLanguage].concat(key.split('.')).reduce((o, k) => {
    const next = o[k];

    if (next) {
      return next;
    }

    return `#${key}#`;
  }, translations());

  return string;
}

export default translate;
