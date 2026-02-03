import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section
      style={{
        backgroundColor: "#f7f4f1",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "40px",
            fontWeight: 700,
            color: "var(--heading-color)",
            marginBottom: "24px",
          }}
        >
          Schedule a Consultation
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "var(--text-color)",
            maxWidth: "640px",
            margin: "0 auto 48px",
          }}
        >
          I offer a free 15-minute phone consultation to discuss your needs and
          determine if we're a good fit. This is your opportunity to ask
          questions and learn more about how therapy with me works.
        </p>

        {/* CENTER BOX */}
        <div
          style={{
            backgroundColor: "#e3ece7",
            padding: "56px 40px",
            maxWidth: "420px",
            margin: "0 auto",
            borderRadius: "12px",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 20px",
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

          {/* NAME */}
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "6px",
            }}
          >
            Dr. Maya Reynolds, PsyD
          </p>

          {/* TITLE */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#6b7b73",
              marginBottom: "28px",
            }}
          >
            Licensed Clinical Psychologist
          </p>

          {/* BUTTON → LINK */}
          <Link
            href="/#about"
            style={{
              display: "inline-block",
              padding: "14px 34px",
              backgroundColor: "#2f4f3e",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
