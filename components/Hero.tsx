export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#f4f8f6", // ✅ distinct hero background
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 24px 90px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            width: "80%",
            height: "650px",
            overflow: "hidden",
            borderTopLeftRadius: "220px",
            borderTopRightRadius: "220px",
          }}
        >
          <img
            src="/images/hero-calm.jpg"
            alt="Calm therapy environment"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "1.15",
              color: "var(--heading-color)",
              marginBottom: "22px",
            }}
          >
            Find calm in <br />
            the chaos
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              color: "var(--text-color)",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Anxiety & Trauma Therapy for Adults in Santa Monica, CA.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#2f5d50",
              color: "#ffffff",
              padding: "15px 42px",
              borderRadius: "0px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
