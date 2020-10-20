import React from "react"
import "../styles/Header.scss"

export default function Header() {
  return (
    <header>
      <h1>TuffyHacks</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
