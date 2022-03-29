import {} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    backgroundCard: string;
    backgroundCreateInvoice: string;
    fillIconCreateInvoice: string;
  }
}
