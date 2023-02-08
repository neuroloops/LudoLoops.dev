import React from "react"
import { css } from "@emotion/react"
const Demo = () => {
  return (
    <div className="bg--blue">
      <div className="imgContainer">
        <img
          src="/demo/leftBg.png"
          alt="background image"
        />
      </div>
      <section className="section">
        <h2>Code Demo</h2>
        <div css={demoBox}>
          <iframe
            height="480"
            css={codepen}
            scrolling="no"
            title="Animated gradient button [pure css]"
            src="https://codepen.io/ludoloops/embed/NWpZeEw?default-tab=result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen
            <a href="https://codepen.io/ludoloops/pen/NWpZeEw">
              Animated gradient button [pure css]
            </a>
            by LudoLoops (<a href="https://codepen.io/ludoloops">@ludoloops</a>)
            on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </section>
      <div
        className="imgContainer"
        css={rightBg}
      >
        <img
          src="/demo/rightBg.png"
          alt="background image"
        />
      </div>
    </div>
  )
}

export default Demo

const rightBg = css`
  align-self: flex-end;
  margin-right: 62px;
`

const demoBox = css`
  height: 566px;
  width: 656px;
  background-color: #1f3262;
  border-radius: 25px;
`

const codepen = css`
  width: 100%;
  background-color: white;
`
