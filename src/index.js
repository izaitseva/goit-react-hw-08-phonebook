import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import App from 'App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';
import AuthLayout from 'modules/Authlayout/AuthLayout';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-hw-8">
            <App />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
