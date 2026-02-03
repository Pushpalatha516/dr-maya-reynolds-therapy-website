import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ width: "100%" }}>
      {/* TOP FOOTER */}
      <div
        style={{
          backgroundColor: "#f2f5f3", // soft light bg
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "14px",
              }}
            >
              Dr. Maya Reynolds
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
                marginBottom: "12px",
              }}
            >
              Licensed Clinical Psychologist
              <br />
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#5b7a6a",
              }}
            >
              In-Person & Telehealth Available
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "14px",
              }}
            >
              Sessions
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
              }}
            >
              Monday – Friday
              <br />
              By Appointment
              <br />
              <br />
              California-licensed telehealth
              <br />
              available statewide
            </p>
          </div>

          {/* RIGHT – NAVIGATION */}
          <div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "14px",
              }}
            >
              Navigate
            </h3>

            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <Link
                href="/"
                style={{
                  display: "block",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  marginBottom: "6px",
                }}
              >
                Home
              </Link>

              <Link
                href="/blog"
                style={{
                  display: "block",
                  color: "var(--text-color)",
                  textDecoration: "none",
                  marginBottom: "6px",
                }}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                style={{
                  display: "block",
                  color: "var(--text-color)",
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div
        style={{
          backgroundColor: "#e6ebe8",
          padding: "26px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "var(--text-color)",
            marginBottom: "8px",
          }}
        >
          Privacy Policy &nbsp;•&nbsp; Good Faith Estimate &nbsp;•&nbsp; Terms of
          Service
        </p>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "var(--text-color)",
          }}
        >
          © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
