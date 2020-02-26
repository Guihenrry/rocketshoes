import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import store from './store';
import GlobalStyles from './styles/global';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
