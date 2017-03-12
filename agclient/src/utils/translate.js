import translations from '../i18n';
import config from 'config';

function translate(key) {
  const string = [config.language].concat(key.split('.')).reduce((o, k) => {
    const next = o[k];

    if (next) {
      return next;
    }

    return `#${key}#`;
  }, translations());

  return string;
}

export default translate;
