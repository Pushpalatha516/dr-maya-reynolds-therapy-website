export default function ContactHero() {
  return (
    <section
      style={{
        backgroundColor: "#f3ebe6", // soft warm neutral (page color 1)
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "44px",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "24px",
            }}
          >
            Let’s Connect
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "var(--text-color)",
              marginBottom: "36px",
              maxWidth: "520px",
            }}
          >
            Taking the first step toward therapy is courageous.
            <br />
            <br />
            Reach out for questions, or to schedule a free 15-minute consultation
            to see if we're a good fit.
          </p>

          {/* IMAGE STACK */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              height: "320px",
            }}
          >
            {/* MAIN IMAGE */}
            <img
              src="/images/contact-beach.jpg"
              alt="Calm beach"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "220px",
                borderTopRightRadius: "220px",
              }}
            />

            {/* OVERLAPPED CIRCLE IMAGE */}
            <div
              style={{
                position: "absolute",
                bottom: "-28px",
                right: "-28px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #f3ebe6",
              }}
            >
              <img
                src="/images/contact-plant.jpg"
                alt="Plant detail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BOX */}
        <div
          style={{
            backgroundColor: "#e1ece7", // page color 2 (soft sage)
            padding: "48px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#2f2f2f",
              marginBottom: "20px",
            }}
          >
            <strong>Privacy Notice:</strong> I take your confidentiality
            seriously. All communications are handled with care, and any
            information shared is protected in accordance with HIPAA regulations.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#5f6f67",
            }}
          >
            For secure communication, please use my client portal after
            scheduling your initial consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
