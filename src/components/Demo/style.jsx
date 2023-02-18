import { css } from "@emotion/react"

export const style = {
  bg: css`
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  wrapper: css`
    display: flex;
    padding-bottom: 25px;
  `,

  section: css`
    width: 700px;
  `,

  rightBg: css`
    align-self: flex-end;
    margin-right: 62px;
    /* margin-bottom: 25px; */
  `,

  demoBox: css`
    min-width: 656px;
    width: 656px;
    height: 480px;
  `,

  codepen: css`
    position: absolute;
    width: 100%;
    width: 656px;
    padding: 25px;
    border-radius: 25px;
    background-color: white;
    background-color: #1f3262;
  `,

  bottom: css`
    display: flex;
    height: 25px;
    width: 100vw;
    background-color: black;
  `,
}
