import { css } from "@emotion/react"

export const style = {
  wrapper: css`
    font-size: 13px;
    font-weight: bold;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    top: 0;
    display: flex;
    color: var(--white);
    align-items: center;
    justify-content: space-between;
    z-index: 30;
    height: 74px;
    nav {
      width: 100%;
    }
    background: transparent;

    ul {
      justify-content: space-between;
      display: flex;
      /* row-gap: 40px; */
      font-size: 13px;
      font-weight: bold;
      list-style-type: none;
    }
  `,
}
