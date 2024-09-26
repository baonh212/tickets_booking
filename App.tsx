import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainLayout from './src/MainLayout';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainLayout />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
