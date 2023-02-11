import { css } from "@emotion/react"

export const style = {
  section: css`
    color: var(--txt-dark);
    min-height: 770px;
    width: 100%;
    display: flex;
    gap: 98px;
    margin-bottom: 99px;
  `,

  imgCtn: css`
    align-items: flex-start;
    height: 770px;
    padding-top: 68px;
  `,

  rightCtn: css`
    height: 770px;

    & .aboutMe::after {
      content: "";
      border: 20px solid transparent;
      position: absolute;
      border-right-color: var(--white-dark);
      border-left: 0;
      left: -20px;
      top: 50%;
      margin-top: -20px;
    }
  `,

  aboutMe: css`
    position: relative;
    background-color: var(--white-dark);
    width: 750px;
    border-radius: 19px;
    padding: 33px;

    h2 {
      margin-top: 10px;
      font-weight: 800;
      font-size: 36px;
      span {
        font-size: 18px;
      }
    }

    p {
      font-size: 14px;
      padding: 33px;
    }
  `,
  offer: css`
    margin-top: 30px;
    width: 754px;
    padding: 33px;
    box-shadow: 0px 6px 42px rgba(0, 0, 0, 0.08);
    border-radius: 19px;
    h2 {
      font-weight: 800;
    }
  `,
  cards: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `,
  card: css`
    margin-top: 26px;
    display: flex;
    align-items: center;
    img {
      width: 33px;
    }
    p {
      margin-left: 17px;
      font-weight: 700;
    }
  `,
}
