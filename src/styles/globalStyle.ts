import { css } from "@emotion/react";

import { reset } from "./reset";

export const globalStyle = css`
  ${reset}

  :root {
    --color-primary: #4cb050;
    --color-primary-darker: #39933d;

    --color-border: #e2e3eb;
    --color-background: #2c2f2f;
    --color-text-primary: #1d1c24;
    --color-text-secondary: #848894;
    --color-text-description: #6a6a6a;
    --color-text-price: #dd2525;
    --color-text-flex: var(--color-background);

    --price-level-0: #4f8bff;
    --price-level-1: #32b038;
    --price-level-2: #2a952e;
    --price-level-3: #227d26;
    --price-level-4: #154d17;
    --price-level-5: #e9b738;
    --color-flex: var(--price-level-5);
  }
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: "InfinitySans-RegularA1";
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "InfinitySans-RegularA1";

    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .slick-slider {
    width: 100%;
    padding-top: 2rem;
  }

  .slick-list {
    padding: 0rem 5rem;
  }

  .slick-slide {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
