import React from "react"
import "../styles/Header.scss"

export default function GetUpdates() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://tuffyhacks.us2.list-manage.com/subscribe/post?u=d31df1f969a989a94e25f8dc6&amp;id=441948ac07"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">Subscribe</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div
            style={{
              position: "absolute",
              left: "-5000px",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_d31df1f969a989a94e25f8dc6_441948ac07"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
