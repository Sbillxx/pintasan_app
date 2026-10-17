"use client";
import { useEffect, useRef } from "react";

// Cahaya mengikuti kursor + garis progres scroll
export default function Aura() {
  const aura = useRef(null);
  const bar = useRef(null);
  useEffect(() => {
    const fine = matchMedia("(hover: hover)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const move = (e) => {
      aura.current?.style.setProperty("--x", e.clientX + "px");
      aura.current?.style.setProperty("--y", e.clientY + "px");
    };
    const scroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    if (fine && !calm) addEventListener("pointermove", move);
    addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => { removeEventListener("pointermove", move); removeEventListener("scroll", scroll); };
  }, []);
  return (<><div className="bar" ref={bar} /><div className="aura" ref={aura} /></>);
}
