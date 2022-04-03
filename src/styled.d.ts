import {} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    backgroundMenu: string;
    backgroundForm: string;
    text: string;
    backgroundCard: string;
    backgroundCreateInvoice: string;
    fillIconCreateInvoice: string;
    backgroundInput: string;
  }
}
