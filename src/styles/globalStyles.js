import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Urbanist', sans-serif;
    transition: all .5s linear;
  }

  :root {
    --bg-color: ${({ theme }) => theme.body};
    --text-color: ${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#000',
};

export const darkTheme = {
  body: '#000',
  text: '#fff',
};