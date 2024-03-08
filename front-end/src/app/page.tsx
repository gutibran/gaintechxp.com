"use client"
import { useState, useEffect } from "react";
import Header from "./components/Header/Header"

export default function Index() {
  const [logoSrc, setLogoSrc] = useState("logo.svg")
  const [uiMode , setUiMode] = useState("mobile")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoSrc("/logo-icon.png")
        setUiMode("mobile")
      } else {
        setLogoSrc("/logo.svg")
        setUiMode("Desktop")
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <main>
      <Header logoSrc={logoSrc} uiMode={uiMode} />
    </main>
  );
}
