import {} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    backgroundMenu: string;
    backgroundForm: string;
    text: string;
    backgroundCard: string;
    backgroundButton: string;
    iconButton: string;
    backgroundInput: string;
  }
}
