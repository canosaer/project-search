import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn, faEnvelope)

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);