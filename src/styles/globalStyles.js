import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Urbanist', sans-serif;
    transition: all .5s linear;
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#000',
  primary: '#6200ee',
};

export const darkTheme = {
  body: '#000',
  text: '#fff',
  primary: '#bb86fc',
};