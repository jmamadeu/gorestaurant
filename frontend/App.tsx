import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-AO';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#c72828' />
      <Routes />
    </>
  );
}
