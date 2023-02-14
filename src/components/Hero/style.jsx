import { css } from "@emotion/react"

export const style = {
  imgContainer: css`
    position: relative;
    padding-top: 117px;
  `,

  section: css`
    color: var(--white);
  `,

  bgColor: css`
    background: linear-gradient(180deg, #03035f 0%, #02023b 100%);
    height: 670px;
  `,

  button: css`
    background-color: #01fef0;

    color: var(--txt-btn-dark);
    margin-top: 40px;
    :active {
      background-color: var(--white);
    }
  `,

  img2: css`
    margin-top: 35px;
    margin-left: 66px;
    img {
      width: 435px;
      height: 230px;
    }
  `,

  section: css`
    position: absolute;
    width: 100%;
    max-width: 1900px !important;
    top: 90px;
    color: var(--white);

    h1 {
      font-size: 48px;
      font-weight: var(--bold);
    }
    ul {
      font-size: 14px;
      font-weight: var(--semiBold);
      display: flex;
      padding-inline-start: 0px;
      li {
        &::after {
          padding: 0 1em;
          content: "•";
          color: var(--teal);
        }
        &:last-child::after {
          content: "";
        }
      }
    }
  `,
}
