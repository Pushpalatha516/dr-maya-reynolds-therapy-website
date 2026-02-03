export default function OfficeGallery() {
  return (
    <section
      style={{
        backgroundColor: "#f2f5f3", // 2nd page bg color
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "38px",
            fontWeight: 700,
            color: "var(--heading-color)",
            marginBottom: "22px",
          }}
        >
          A Calm Space for Healing
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#6b6b6b",
            maxWidth: "700px",
            margin: "0 auto 60px",
          }}
        >
          My office is designed to feel grounding and comfortable—a quiet,
          private space with natural light where clients often share they feel at
          ease the moment they arrive.
        </p>

        {/* IMAGE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {[
            "/images/office-1.jpg",
            "/images/office-2.jpg",
            "/images/about-calm.jpg",
            "/images/contact-plant.jpg",
          ].map((src, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt="Office space"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
