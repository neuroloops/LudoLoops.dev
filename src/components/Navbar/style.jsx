import { css } from "@emotion/react"

export const style = {
  bg: css`
    position: sticky;
    position: -webkit-sticky; /* Safari */
    top: 0;
    color: var(--white);
    z-index: 30;
    background: transparent;
    width: 100%;
    display: flex;
    justify-content: center;

    ul {
      display: inline-flex;
      gap: 40px;
      font-size: 0.8125rem;
      font-weight: bold;
      list-style-type: none;
      li {
        cursor: pointer;
      }
    }
  `,

  wrapper: css`
    max-width: var(--maxWidth);
    /* margin: 0 auto; */
    width: 100%;
    height: 74px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 0.8125rem;
    font-weight: bold;
  `,

  emailCtn: css`
    margin-right: 0.75rem;
    display: inline-flex;
    align-items: center;

    img {
      margin-right: 12px;
      margin-left: 12px;
    }
  `,
}
