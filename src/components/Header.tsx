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
        <Menu styles={menuStyles}>
          {links.map(([title, anchor]) => {
            return <a href={anchor}>{title}</a>
          })}
        </Menu>
      )}
    </header>
  )
}

const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
} as const
