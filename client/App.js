// App.js

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { LoggedInUserProvider } from './components/context';
export default function App() {
  return (
    <LoggedInUserProvider>
    <AppNavigator />
    </LoggedInUserProvider>
  );
}
