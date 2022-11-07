import { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./toggle.scss"

function Toggle() {
  const { dark, toggleDark } = useContext(ThemeContext)
  // false = dark mode because of the way I wrote the CSS
  const [active, setActive] = useState(false)
  // the opposite, for screenreaders
  const [ariaActive, setAriaActive] = useState(true)

  const changeThemeAndToggle = () => {
    if (toggleDark) {
      if (dark === "theme-dark") {
        toggleDark("theme-light")
        document.documentElement.className = "theme-light"
        setActive(true)
        setAriaActive(false)
      } else {
        toggleDark("theme-dark")
        document.documentElement.className = "theme-dark"
        setActive(false)
        setAriaActive(true)
      }
    }
  }

  const handleOnClick = () => {
    changeThemeAndToggle()
  }

  const handleKeypress = (e: any) => {
    if (e.code === "Enter") {
      changeThemeAndToggle()
    }
  }

  useEffect(() => {
    if (dark === "theme-dark") {
      setActive(false)
      setAriaActive(true)
    } else {
      setActive(true)
      setAriaActive(false)
    }
  }, [dark])

  return (
    <div className="container--toggle">
      <input
        aria-label="dark mode toggle"
        role="switch"
        aria-checked={ariaActive}
        onKeyPress={handleKeypress}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
        dark mode toggle
      </label>
    </div>
  )
}

export default Toggle
