export default function ApproachSection() {
  return (
    <section
      style={{
        backgroundColor: "#f3ebe6", // ✅ distinct approach section bg
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "110px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "center",
        }}
      >
        {/* LEFT QUOTE */}
        <div>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: "1.3",
              color: "var(--heading-color)",
              marginBottom: "24px",
            }}
          >
            “Healing happens when we feel safe enough to let go.”
          </p>

          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              color: "var(--text-color)",
            }}
          >
            — Dr. Maya Reynolds
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "40px",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "28px",
            }}
          >
            My Approach
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "var(--text-color)",
              marginBottom: "22px",
            }}
          >
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "var(--text-color)",
              marginBottom: "22px",
            }}
          >
            I integrate evidence-based methods such as cognitive-behavioral
            therapy (CBT), EMDR, mindfulness-based practices, and body-oriented
            techniques to help you understand what you're experiencing.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "var(--text-color)",
              marginBottom: "42px",
            }}
          >
            My goal is not just symptom relief, but helping you develop insight,
            resilience, and a stronger relationship with yourself over time.
          </p>

          {/* CTA BUTTON */}
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "15px 42px",
              backgroundColor: "#2f4f3e", // ✅ different CTA bg
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
            }}
            className="approach-btn"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
