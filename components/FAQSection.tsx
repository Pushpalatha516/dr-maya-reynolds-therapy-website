export default function FAQSection() {
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
          padding: "120px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
            margin: "0 auto",
            borderTopLeftRadius: "260px",
            borderTopRightRadius: "260px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/faq-botanical.jpg"
            alt="Calming botanical imagery"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "40px",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "24px",
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ddd",
              marginBottom: "28px",
            }}
          />

          {/* FAQ ITEMS */}
          {[
            "What issues do you specialize in?",
            "What therapy methods do you use?",
            "Do you offer telehealth sessions?",
            "What can I expect in our first session?",
          ].map((question, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  color: "var(--heading-color)",
                }}
              >
                <span>{question}</span>

                {/* PLUS ICON */}
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  +
                </span>
              </div>

              {/* Divider */}
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #e2e2e2",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
