import React from "react"
import { useWindowWidth } from "@react-hook/window-size" // https://github.com/jaredLunde/react-hook/tree/master/packages/window-size#readme
import { slide as Menu } from "react-burger-menu" // https://github.com/negomi/react-burger-menu
import "../styles/Header.scss"

const links: [string, string][] = [
  ["About", "#about"],
  ["Sponsors", "#sponsors"],
  ["FAQ", "#faq"],
]

export default function Header() {
  const windowWidth = useWindowWidth()
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
