import { createGlobalStyle, css } from 'styled-components';
export const baseStyleCss = css`
  body,
  html,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 14.4px;
    font-weight: 400;
    line-height: 1.5;
    background: #f5f5f5;
    color: #34363a;
  }

  html {
    --primary-color: rgb(28, 177, 226);
    --accent-color: rgb(57, 199, 250);
    --slightly-transparent-accent-color: rgba(57, 199, 250, 0.7);
    --semi-transparent-accent-color: rgba(57, 199, 250, 0.1);
    --slightly-transparent-white: rgba(255, 255, 255, 0.8);
    --transparent-grey: rgba(0, 0, 0, 0.05);
    --light-color: rgb(201, 234, 242);
    --disabled-color: rgb(207, 207, 207);
    --dark-grey: #848484;
    --dark-color: rgb(39, 43, 51);
    --error-color: rgb(250, 57, 135);
    --input-min-height: 38px;
  }

  #modal:not(:empty) + #root {
    filter: blur(5px);
    transform: scale(1.01);
  }

  /* Custom select style */
  select {
    display: inline-block;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: #444;
    line-height: 1.3;
    padding: 0.66em 2em 0.66em 0.8em;
    min-width: 4.2em;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 3px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='57' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M98 2.2A6 6 0 0 0 93.5.3H6.3a6 6 0 0 0-4.4 1.9A6 6 0 0 0 0 6.6 6 6 0 0 0 1.8 11l43.7 43.6a6 6 0 0 0 4.4 1.9 6 6 0 0 0 4.4-1.9L98 11a6 6 0 0 0 1.8-4.3 6 6 0 0 0-1.9-4.4z' fill='%23333' /%3E%3C/svg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }

  select:focus,
  select:active {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px var(--semi-transparent-accent-color);
    outline: none;
  }

  /* Set options to normal weight */
  select option {
    font-weight: normal;
  }
`;
export const BaseStyle = createGlobalStyle`
  ${baseStyleCss}
`;
