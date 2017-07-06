import { injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face { font-family: "Overwatch"; src: url("http://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff") format('woff'); }

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
