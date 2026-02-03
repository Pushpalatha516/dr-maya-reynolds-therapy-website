export default function BlogHero() {
  return (
    <section
      style={{
        backgroundColor: "#faf7f5", // BG COLOR 1 (soft neutral)
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
            src="/images/blog-hero-new.jpg"
            alt="Blog hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "42px",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "24px",
            }}
          >
            Insights & Resources
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "var(--text-color)",
              marginBottom: "22px",
            }}
          >
            Thoughts on anxiety, trauma, healing, and living a more grounded
            life. I share practical tools and perspectives from my work as a
            psychologist in Santa Monica.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "var(--text-color)",
            }}
          >
            Welcome to the blog.
          </p>
        </div>
      </div>
    </section>
  );
}
