import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#f7f9f8", // soft neutral header bg
        borderBottom: "1px solid #e4e8e6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT – NAME / LOGO */}
        <Link
          href="/"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "20px",
            fontWeight: 600,
            color: "var(--heading-color)",
            textDecoration: "none",
          }}
        >
          Dr. Maya Reynolds
        </Link>

        {/* RIGHT – NAVIGATION */}
        <nav
          style={{
            display: "flex",
            gap: "36px",
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#2f4f3e",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Home
          </Link>

          <Link
            href="/blog"
            style={{
              color: "var(--text-color)",
              textDecoration: "none",
            }}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            style={{
              color: "var(--text-color)",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


    <header className="w-full bg-[#f7f9f8] border-b border-[#e4e8e6]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LEFT – LOGO / NAME */}
        <Link
          href="/"
          className="font-heading text-xl font-semibold text-heading no-underline"
        >
          Dr. Maya Reynolds
        </Link>

        {/* RIGHT – NAVIGATION */}
        <nav className="flex gap-9 font-body text-[15px]">
          <Link
            href="/"
            className="text-primary font-medium hover:opacity-80 transition"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="text-body hover:text-primary transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-body hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>

