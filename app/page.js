import Logo from "../components/Logo";
import Aura from "../components/Aura";
import Clock from "../components/Clock";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import LinkRow from "../components/LinkRow";
import ThemeToggle from "../components/ThemeToggle";
import { links } from "../lib/links";

const title = [
  { t: "Satu" }, { t: "halaman." }, { t: "Semua" }, { t: "jalan", hl: true }, { t: "pintas.", hl: true },
];
const principles = [
  ["Sekali klik", "Tanpa login, tanpa menu berlapis. Pilih lalu pergi."],
  ["Tanpa ribet", "Dibangun dengan Next.js, cepat dan ringan dibuka di perangkat apa pun."],
  ["Gampang ditambah", "Pintasan baru cukup satu objek di lib/links.js."],
];

export default function Page() {
  return (
    <>
      <Aura />
      <div className="wrap">
        <nav>
          <div className="logo"><Logo />Pintasan</div>
          <div className="nav-right">
            <Clock />
            <ThemeToggle />
          </div>
        </nav>

        <header>
          <div className="label mono"><b>01</b> / Pintasan</div>
          <h1 aria-label="Satu halaman. Semua jalan pintas.">
            {title.map((w, i) => (
              <span key={i} className={`w${w.hl ? " hl" : ""}`} style={{ "--i": i }} aria-hidden="true">{w.t}</span>
            ))}
          </h1>
          <p className="lead">Situs-situs yang gue pakai terus, dikumpulin di satu tempat. Sekali klik, langsung berangkat.</p>
          <div className="btns">
            <Magnetic main external href={links[0].url}>Buka pintasan pertama</Magnetic>
            <Magnetic href="#daftar">Lihat daftar</Magnetic>
          </div>
        </header>

        <Reveal id="daftar">
          <div className="label mono"><b>02</b> / Daftar</div>
          <h2 className="big">{links.length} pintasan, dan terus bertambah.</h2>
          <div className="list">
            {links.map((l, i) => <LinkRow key={l.url} link={l} index={i} />)}
          </div>
          <div className="soon mono"><span className="cur">pintasan berikutnya menyusul</span><span>{String(links.length + 1).padStart(2, "0")}</span></div>
        </Reveal>

        <Reveal>
          <div className="label mono"><b>03</b> / Prinsip</div>
          <h2 className="big">Dibuat sederhana.</h2>
          <div className="pr">
            {principles.map(([h, p], i) => (
              <div key={h}><span className="label mono">{String(i + 1).padStart(2, "0")}</span><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </Reveal>

        <footer><span>© {new Date().getFullYear()} Pintasan</span><span>Dibuat dengan tangan sendiri</span></footer>
      </div>
    </>
  );
}
