import { useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./context/ThemeContext"
import { Home } from "./pages/Home"
import { Swap } from "./pages/Swap"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import "./App.scss"

function App() {
  const { dark } = useContext(ThemeContext)
  useEffect(() => {
    if (dark === "theme-dark") {
      document.documentElement.className = "theme-dark"
    } else document.documentElement.className = "theme-light"
  }, [dark])
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
