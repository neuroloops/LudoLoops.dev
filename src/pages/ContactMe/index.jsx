import React from "react";

import { style } from "./style";

const ContactMe = () => {
  return (
    <div
      css={style.bg}
      id="Contacts"
    >
      <section css={style.section}>
        <div>
          <img
            src={"/navbar/logo_text.svg"}
            alt="ludoloops logomark"
          />
        </div>
        <div>
          <p>
            Do you want to work with me? <br /> Contact me.
          </p>
        </div>
        {/* <Button
        // className="btn"
        // css={style.button}
        >
          contact with me
        </Button> */}
      </section>
    </div>
  );
};

export default ContactMe;
