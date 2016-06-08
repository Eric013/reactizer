import React from 'react';
import { render } from 'react-dom';
import immutable from 'immutable';
import immutableDevtools from 'immutable-devtools';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './Root';
import configureGlobals from '../../universal/configureGlobals';
import { BROWSER } from '../../universal/consts/envConsts';

// immutable: logging to the console and debugging
immutableDevtools(immutable);

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

configureGlobals(BROWSER);

const view = document.getElementById('react-view');

render(
  <Root />,
  view
);

// -------------------
// Hot-reloading React
// -------------------

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept('./Root', () => {
    render(
      <Root />,
      view
    );
  });
}
