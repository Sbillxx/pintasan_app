"use client";
import { useRef, useEffect } from "react";

const CHARS = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789/<>_";

export default function LinkRow({ link, index }) {
  const row = useRef(null);
  const nameEl = useRef(null);
  const timer = useRef(null);
  const host =
    link.host ||
    (link.url.startsWith("http")
      ? link.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
      : link.url.replace(/^\//, ""));

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  const scramble = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timer.current);
    let n = 0;
    timer.current = setInterval(() => {
      if (nameEl.current) {
        nameEl.current.textContent = link.name
          .split("")
          .map((c, i) => (i < n || c === " " ? c : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("");
      }
      if (n >= link.name.length) {
        clearInterval(timer.current);
        if (nameEl.current) nameEl.current.textContent = link.name;
      }
      n += 1.2;
    }, 28);
  };

  const stopScramble = () => {
    clearInterval(timer.current);
    if (nameEl.current) nameEl.current.textContent = link.name;
  };

  const spot = (e) => {
    const r = row.current.getBoundingClientRect();
    row.current.style.setProperty("--mx", e.clientX - r.left + "px");
    row.current.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <a
      ref={row}
      className="row"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${link.name}`}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onMouseMove={spot}
    >
      <span className="idx mono">{String(index + 1).padStart(2, "0")}</span>
      <span className="name" ref={nameEl}>{link.name}</span>
      <span className="go" aria-hidden="true">↗</span>
      <p className="desc">{link.desc}</p>
      <div className="meta mono">
        <span className="chip">{link.cat}</span>
        <span className="chip ok">{link.status}</span>
        <span>{host}</span>
      </div>
    </a>
  );
}
