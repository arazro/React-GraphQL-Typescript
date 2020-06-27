import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body  {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
   a {
    background: ${({ theme }: any) => theme.toggleBorder}!important ;
    color: ${({ theme }: any) => theme.text}!important;
  }
  ul {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
  li {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
  table {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
  td {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
  tr {
    background: ${({ theme }: any) => theme.body} ;
    color: ${({ theme }: any) => theme.text};
  }
  h1{
    color: ${({ theme }: any) => theme.text};
  }
  `