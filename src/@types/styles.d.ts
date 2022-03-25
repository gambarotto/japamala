import 'styled-components/native';
import themeGlobal from '../global/global';

declare module 'styled-components/native' {
  type ThemeType = typeof themeGlobal;
  export interface DefaultTheme extends ThemeType {}
}
