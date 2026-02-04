"use client";

export default function About() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#faf7f5",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "var(--primary-color)",
                marginBottom: "16px",
              }}
            >
              About Dr. Maya Reynolds
            </p>

            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "42px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "28px",
                lineHeight: "1.2",
              }}
            >
              You deserve to feel at peace.
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                color: "var(--text-color)",
                marginBottom: "22px",
                lineHeight: "1.7",
                maxWidth: "520px",
              }}
            >
              I'm a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                color: "var(--text-color)",
                marginBottom: "40px",
                lineHeight: "1.7",
                maxWidth: "520px",
              }}
            >
              Many of the people I work with are high-achieving, thoughtful, and
              self-aware—but internally feel exhausted, stuck in overthinking, or
              emotionally on edge. If that sounds familiar, I'm here to help.
            </p>

            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                border: "2px solid var(--primary-color)",
                backgroundColor: "#e3ece7",
                color: "var(--primary-color)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              Get in touch
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            padding: 60px 20px !important;
            gap: 40px !important;
          }

          h2 {
            font-size: 32px !important;
          }

          p {
            font-size: 16px !important;
          }

          div[style*="420px"] {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </>
  );
}
