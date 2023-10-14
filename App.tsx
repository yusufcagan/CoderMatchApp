import {View, Text} from 'react-native';
import React from 'react';
import MyStack from './src/routes/NavigationStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
