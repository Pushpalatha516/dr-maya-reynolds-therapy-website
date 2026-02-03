export default function OfficeSection() {
  return (
    <section
      style={{
        backgroundColor: "#e9efe9",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        {/* SMALL TITLE */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--text-color)",
            marginBottom: "18px",
          }}
        >
          A Calm Space for Healing
        </p>

        {/* MAIN HEADING */}
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "40px",
            fontWeight: 700,
            color: "var(--heading-color)",
            marginBottom: "28px",
          }}
        >
          Our Office
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "var(--text-color)",
            maxWidth: "720px",
            margin: "0 auto 56px auto",
          }}
        >
          My office is a quiet, private space in Santa Monica designed to feel
          calm and grounding. With natural light and a comfortable, uncluttered
          environment, clients often share that the space itself helps them feel
          more at ease when they arrive.
        </p>

        {/* IMAGES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "420px",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/office-1.jpg"
              alt="Therapy Office Interior"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              width: "420px",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/office-2.jpg"
              alt="Therapy Office Space"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* LOCATION & AVAILABILITY */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* LOCATION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "var(--text-color)",
            }}
          >
            {/* LOCATION ICON */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>123th Street 45 W, Santa Monica, CA 90401</span>
          </div>

          {/* AVAILABILITY */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "var(--text-color)",
            }}
          >
            {/* COMPUTER ICON */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>

            <span>In-Person & Telehealth Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
