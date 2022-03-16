import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import NewHooponopono from './screens/NewHooponopono';
import MyHooponopono from './screens/MyHooponopono';
import Hooponopono from './screens/Hooponopono';

export type RootStackParamList = {
  Home: undefined;
  NewHooponopono: undefined;
  MyHooponopono: undefined;
  Hooponopono: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='NewHooponopono' component={NewHooponopono} />
      <Stack.Screen name='MyHooponopono' component={MyHooponopono} />
      <Stack.Screen name='Hooponopono' component={Hooponopono} />
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default AppRoutes;