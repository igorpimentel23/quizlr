import { dark } from '@theme/dark';
import 'styled-components';

declare module 'styled-components' {
  type CustomTheme = typeof dark;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
