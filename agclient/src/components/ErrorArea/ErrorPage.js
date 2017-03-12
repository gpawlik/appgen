import React from 'react';
import { Link } from 'react-router';

import translate from 'utils/translate';

export default () => {
  return (
    <div className="content-wrapper">
      <h3>{translate('404.title')}</h3>
      <div>
        <p>{translate('404.subtitle')}</p>
        <p>{translate('404.backText')} <Link to="/">{translate('404.backLink')}</Link>.</p>
      </div>
    </div>
  );
};
