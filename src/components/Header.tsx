import React from "react"
import { useWindowWidth } from "@react-hook/window-size" // https://github.com/jaredLunde/react-hook/tree/master/packages/window-size#readme
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
      {windowWidth >= 700 ? (
        <nav>
          <ul>
            {links.map(([title, anchor]) => {
              return (
                <li>
                  <a href={anchor}>{title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  )
}
