import Link from "next/link";

export const metadata = {
  title: "Página não encontrada",
  description:
    "A página que procura não existe. Volte à Cervejaria Esquina Steakhouse - steakhouse em Ponta Delgada, Açores.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: '"Sofia Sans Extra Condensed", sans-serif',
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 15vw, 10rem)",
          fontWeight: 600,
          margin: 0,
          letterSpacing: "-2px",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
          marginTop: "1rem",
          marginBottom: "2rem",
          opacity: 0.9,
          letterSpacing: "0.5px",
        }}
      >
        Página não encontrada
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "2rem",
          opacity: 0.7,
          maxWidth: "400px",
        }}
      >
        A página que procura não existe ou foi movida.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            padding: "12px 28px",
            backgroundColor: "#fff",
            color: "#000",
            textDecoration: "none",
            fontSize: "1.25rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderRadius: "5px",
            transition: "opacity 0.2s ease",
          }}
        >
          Página inicial
        </Link>
        <Link
          href="/en"
          style={{
            padding: "12px 28px",
            backgroundColor: "transparent",
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.25rem",
            border: "1px solid #333",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderRadius: "5px",
            transition: "opacity 0.2s ease",
          }}
        >
          Home (EN)
        </Link>
      </div>
    </div>
  );
}
