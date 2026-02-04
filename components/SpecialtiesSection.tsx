export default function SpecialtiesSection() {
  return (
    <section
      className="specialties-section"
      style={{
        backgroundColor: "#faf6f1", // warm linen section bg
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        {/* SECTION TITLE */}
        <h2
          className="specialties-heading"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "40px",
            fontWeight: 700,
            color: "var(--heading-color)",
            marginBottom: "64px",
          }}
        >
          My Specialties
        </h2>

        {/* SPECIALTY BOXES */}
        <div
          className="specialties-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {/* BOX 1 */}
          <div
            className="specialty-card"
            style={{
              backgroundColor: "#efe6db",
              padding: "50px 36px",
              borderRadius: "28px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "18px",
              }}
            >
              Anxiety & Panic
            </h3>

            <p
              className="specialty-text"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "var(--text-color)",
                lineHeight: "1.7",
                marginBottom: "36px",
              }}
            >
              Constant worry, tension in your body, difficulty sleeping—I help
              clients understand both the emotional and physiological sides of
              anxiety using evidence-based CBT and mindfulness practices.
            </p>

            <div
              className="specialty-image"
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src="/images/service-anxiety.jpg"
                alt="Anxiety Therapy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* BOX 2 */}
          <div
            className="specialty-card"
            style={{
              backgroundColor: "#efe6db",
              padding: "50px 36px",
              borderRadius: "28px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "18px",
              }}
            >
              Trauma Recovery
            </h3>

            <p
              className="specialty-text"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "var(--text-color)",
                lineHeight: "1.7",
                marginBottom: "36px",
              }}
            >
              Whether from a single incident or long-standing patterns, I use
              EMDR and body-oriented techniques to help you feel regulated and
              safe—not just in sessions, but in your daily life.
            </p>

            <div
              className="specialty-image"
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src="/images/service-trauma.jpg"
                alt="Trauma Recovery"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* BOX 3 */}
          <div
            className="specialty-card"
            style={{
              backgroundColor: "#efe6db",
              padding: "50px 36px",
              borderRadius: "28px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: "18px",
              }}
            >
              Burnout & Stress
            </h3>

            <p
              className="specialty-text"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "var(--text-color)",
                lineHeight: "1.7",
                marginBottom: "36px",
              }}
            >
              For entrepreneurs, creatives, and professionals who feel
              disconnected after years of pushing through. Therapy becomes a
              space to slow down and develop more sustainable ways of living.
            </p>

            <div
              className="specialty-image"
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src="/images/service-burnout.jpg"
                alt="Burnout Therapy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
