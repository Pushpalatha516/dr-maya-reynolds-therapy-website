export default function Services() {
  return (
    <section
      style={{
        backgroundColor: "#e9efe9", // soft sage background
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
            marginBottom: "28px",
          }}
        >
          Ready to take the first step?
        </h2>

        {/* TEXT */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "var(--text-color)",
            marginBottom: "18px",
          }}
        >
          If you're looking for a therapist who combines practical tools with
          depth-oriented work—and who understands the realities of living and
          working in a fast-paced environment—I may be a good fit.
        </p>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "var(--text-color)",
            marginBottom: "40px",
          }}
        >
          Explore services or reach out to schedule a free consultation.
        </p>

        {/* BUTTON */}
        <a
          href="/contact" // ✅ goes to Contact page
          style={{
            display: "inline-block",
            padding: "16px 42px",
            backgroundColor: "#2f4f3e",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "8px",
            transition: "opacity 0.3s ease",
          }}
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
