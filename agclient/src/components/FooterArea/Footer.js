import React from 'react';

import translate from 'utils/translate';
import config from 'config';

export default () => {
  return (
    <div className="Footer">
      <p className="footer-headline">
        {config.appName}
      </p>
      <ul className="footer-links">
        <li><a href="#">{translate('social.fb')}</a></li>
        <li><a href="#">{translate('social.tw')}</a></li>
        <li><a href="#">{translate('social.in')}</a></li>
      </ul>
    </div>
  );
};
