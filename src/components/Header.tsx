import React from "react"
import "../styles/Header.scss"

export default function Header() {
  return (
    <header>
      <h1>TuffyHacks</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
