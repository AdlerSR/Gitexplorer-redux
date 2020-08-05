import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import LoginPopup from './components/LoginPopup';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <LoginPopup />
    </Provider>
  );
}

export default App;
