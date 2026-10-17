"use client";
import { useRef } from "react";

// Tombol pil yang tertarik pelan ke arah kursor
export default function Magnetic({ href, main = false, external = false, children }) {
  const ref = useRef(null);
  const move = (e) => {
    if (!matchMedia("(hover: hover)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
  };
  return (
    <a ref={ref} href={href} className={`pill ${main ? "main" : ""}`}
       onPointerMove={move} onPointerLeave={() => (ref.current.style.transform = "")}
       {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}
