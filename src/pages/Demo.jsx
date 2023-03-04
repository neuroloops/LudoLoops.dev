import React from "react"
import style from "../components/Demo/style"

const Demo = () => {
  return (
    <div
      className="bg--blue"
      id="Demo"
      css={style.bg}
    >
      <div css={style.wrapper}>
        <div
        // className="imgContainer"
        >
          <img
            src="/demo/leftBg.png"
            alt="background image"
          />
        </div>
        <section
          className="section"
          css={style.section}
        >
          <h2>Code Demo</h2>

          <div css={style.demoBox}>
            <iframe
              height="480"
              css={style.codepen}
              scrolling="no"
              title="Animated gradient button [pure css]"
              src="https://codepen.io/ludoloops/embed/NWpZeEw?default-tab=result"
              frameBorder="no"
              loading="lazy"
              allowtransparency="true"
              allowFullScreen={true}
            >
              See the Pen
              <a href="https://codepen.io/ludoloops/pen/NWpZeEw">
                Animated gradient button [pure css]
              </a>
              by LudoLoops (
              <a href="https://codepen.io/ludoloops">@ludoloops</a>) on
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
        </section>
        <div
          // className="imgContainer"
          css={style.rightBg}
        >
          <img
            src="/demo/rightBg.png"
            alt="background image"
          />
        </div>
      </div>
      <div css={style.bottom}></div>
    </div>
  )
}

export default Demo
