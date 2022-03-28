import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { GloriaHallelujah_400Regular } from '@expo-google-fonts/gloria-hallelujah';
import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

import themeGlobal from './src/global/styles';
import AppRoutes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    roboto: Roboto_400Regular,
    gloriaH: GloriaHallelujah_400Regular,
    indieF: IndieFlower_400Regular,
  });
  return fontsLoaded ? (
    <ThemeProvider theme={themeGlobal}>
      <StatusBar style="dark" />
      <AppRoutes />
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
