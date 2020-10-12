import React from "react"
import "../styles/Header.scss"

export default function Header() {
  return (
    <header>
      <h1>TuffyHacks</h1>
      <nav>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Sponsors</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
