import { injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    font-family: Arial, sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
    min-width: 320px;
    font-size: 16px;
    color: ${theme.colors.text}
    font-family: Arial, sans-serif;
  }
`;
