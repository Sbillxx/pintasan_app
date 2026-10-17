"use client";
import { useEffect, useState } from "react";

// Tema gelap bawaan; pilihan pengunjung disimpan di localStorage.
export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);
  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("pintasan-theme", next); } catch {}
    setTheme(next);
  };
  const dark = theme === "dark";
  return (
    <button className="tg" type="button" onClick={flip} aria-label={dark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}>
      <span key={theme} className="tgi">{dark ? "☀" : "☾"}</span>
    </button>
  );
}
