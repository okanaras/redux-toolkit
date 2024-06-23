import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * Import islemini gercewklestiriyoruz : "import { Provider } from 'react-redux';"
   * Daha sonra App componentinini Provider ile sariyoruz ve props olarak olusturdugumuz store.jsx i veriyoruz.
   */

  <Provider store={store}>
    <App />
  </Provider>,
)
