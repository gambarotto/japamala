
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { GloriaHallelujah_400Regular } from '@expo-google-fonts/gloria-hallelujah';
import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

import themeGlobal from './src/styles/global';
import AppRoutes from './src/routes';


export default function App() {

  let [fontsLoaded] = useFonts({
    roboto:Roboto_400Regular,
    gloriaH:GloriaHallelujah_400Regular,
    indieF:IndieFlower_400Regular
  })
  return fontsLoaded ? (
      <ThemeProvider theme={themeGlobal}>
        <AppRoutes />
      </ThemeProvider>
    ) : <AppLoading/> 
}
