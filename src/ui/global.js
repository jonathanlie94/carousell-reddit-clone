import { injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face { font-family: "Overwatch"; src: url("https://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff") format('woff'); }

  html {
    font-family: Arial, sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: ${theme.colors.text};
    font-family: Arial, sans-serif;
  }
`;
