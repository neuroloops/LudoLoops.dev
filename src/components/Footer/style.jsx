import { css } from "@emotion/react"

export const style = {
  footer: css`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-color: var(--bg-footer);
    color: var(--white);
    height: 450px;
    ul {
      display: flex;
      gap: 41px;
    }

    .footerNav {
      width: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  `,
}
