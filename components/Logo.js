export default function Logo({ size = 32 }) {
  return (
    <img
      src="/image.png"
      alt="Logo Pintasan"
      width={size}
      height={size}
      className="mark"
      style={{ width: size, height: size, objectFit: "contain", display: "block", borderRadius: "8px" }}
    />
  );
}
