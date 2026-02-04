export default function SpecialtiesSection() {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <section
      style={{
        backgroundColor: "#faf6f1",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "60px 16px" : "100px 24px",
          textAlign: "center",
        }}
      >
        {/* SECTION TITLE */}
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: isMobile ? "28px" : "40px",
            fontWeight: 700,
            color: "var(--heading-color)",
            marginBottom: isMobile ? "40px" : "64px",
          }}
        >
          My Specialties
        </h2>

        {/* SPECIALTY BOXES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "24px" : "40px",
            justifyItems: "center",
          }}
        >
          {[
            {
              title: "Anxiety & Panic",
              img: "/images/service-anxiety.jpg",
              text:
                "Constant worry, tension in your body, difficulty sleeping—I help clients understand anxiety using evidence-based CBT and mindfulness practices.",
            },
            {
              title: "Trauma Recovery",
              img: "/images/service-trauma.jpg",
              text:
                "Using EMDR and body-oriented techniques to help you feel regulated and safe in daily life.",
            },
            {
              title: "Burnout & Stress",
              img: "/images/service-burnout.jpg",
              text:
                "A space to slow down and develop sustainable ways of living after years of pushing through.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#efe6db",
                padding: isMobile ? "32px 20px" : "50px 36px",
                borderRadius: "28px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                maxWidth: "360px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "15px" : "16px",
                  color: "var(--text-color)",
                  lineHeight: "1.6",
                  marginBottom: "28px",
                }}
              >
                {item.text}
              </p>

              <div
                style={{
                  width: isMobile ? "140px" : "190px",
                  height: isMobile ? "140px" : "190px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
