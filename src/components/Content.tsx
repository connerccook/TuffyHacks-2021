import React from "react"
import "../styles/Content.scss"

export default function Content() {
  return (
    <main>
      <section id="landing">
        <h1>TuffyHacks 2021</h1>
        <p>Making dreams reality</p>
        <time dateTime="2021-3-27">March 27-28, 2021 • Virtual Event</time>
        <a href="#">Register Now</a>
        <a href="#">Schedule</a>
        <p>Interested in sponsoring?</p>
      </section>

      <section id="about">
        <div id="stats">
          <p>300 Hackers.</p>
          <p>24 Hours.</p>
          <p>Infinite Potential.</p>
        </div>
        <div id="info">
          <h2>Empowering Students</h2>
          <p>
            Empowering Students TuffyHacks is Cal State Fullerton's student-run
            hackathon for beginners and first-time hackers, where participants
            from all our college create innovative products in 24 hours. This
            year, our hackathon will be held virtually on March 27 - 28th,
            meaning you can participate from the comfort of your own home! Come
            learn new topics with recorded workshops ranging from open-source
            software to creating your own DiscordBot. Meet our sponsors at their
            networking events. Your project also has the chance to win some of
            our cool prizes!
          </p>
          <a href="#">Register Now</a>
        </div>
      </section>

      <section id="sponsors">
        <h2>Sponsor a Special Weekend</h2>
        <p></p>
        <a href="#">Become a Sponsor</a>
      </section>

      <section id="faq">
        <details>
          <summary>What is Tuffy Hacks?</summary>A fun time.
        </details>
        <details>
          <summary>Will Tuffy Hacks happen in person or virtually?</summary>
          In person.
        </details>
        <details>
          <summary>Who can participate?</summary>
        </details>
        <details>
          <summary>What if I've never been to a hackathon before?</summary>
        </details>
        <details>
          <summary>How much does it cost to attend Tuffy Hacks?</summary>
        </details>
        <details>
          <summary>When do hacker applications open?</summary>
        </details>
        <details>
          <summary>What is Tuffy Hacks?</summary>
        </details>
        <details>
          <summary>Will Tuffy Hacks happen in person or virtually?</summary>
        </details>
        <details>
          <summary>Who can participate?</summary>
        </details>
        <details>
          <summary>What if I've never been to a hackathon before?</summary>
        </details>
        <details>
          <summary>How much does it cost to attend Tuffy Hacks?</summary>
        </details>
        <details>
          <summary>When do hacker applications open?</summary>
        </details>
      </section>
    </main>
  )
}
