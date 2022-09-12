/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import App from './src';
import { Provider } from "react-redux";
import { store } from './src/store'

const AppRoot = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppRoot;
