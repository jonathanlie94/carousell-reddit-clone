import { css } from 'styled-components';

export function noselect(width) {
  return `
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  `;
}

export const media = {
  mobile: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 481px) and (max-width: 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
};
