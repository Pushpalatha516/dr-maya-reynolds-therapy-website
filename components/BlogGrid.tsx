export default function BlogGrid() {
  return (
    <section
      style={{
        backgroundColor: "#f2f5f3", // BG COLOR 2 (alternate)
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "60px 40px",
          }}
        >
          {/* CARD 1 */}
          <div>
            <div
              style={{
                width: "100%",
                height: "280px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/images/blog-anxiety.jpg"
                alt="Anxiety grounding techniques"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#8a8a8a",
                marginBottom: "10px",
              }}
            >
              Jan 15, 2025
            </p>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--heading-color)",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              5 Grounding Techniques for Anxiety You Can Use Anywhere
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
                marginBottom: "14px",
              }}
            >
              When anxiety hits, these simple techniques can help bring you back
              to the present moment.
            </p>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#7a7a7a",
              }}
            >
              Read More →
            </span>
          </div>

          {/* CARD 2 */}
          <div>
            <div
              style={{
                width: "100%",
                height: "280px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/images/blog-healing.jpg"
                alt="Understanding the nervous system"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#8a8a8a",
                marginBottom: "10px",
              }}
            >
              Dec 28, 2024
            </p>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--heading-color)",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              Understanding Your Nervous System: A Guide to Self-Regulation
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
                marginBottom: "14px",
              }}
            >
              Learn how your body responds to stress and what you can do to feel
              more regulated.
            </p>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#7a7a7a",
              }}
            >
              Read More →
            </span>
          </div>

          {/* CARD 3 */}
          <div>
            <div
              style={{
                width: "100%",
                height: "280px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/images/blog-boundaries.jpg"
                alt="Setting boundaries"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#8a8a8a",
                marginBottom: "10px",
              }}
            >
              Dec 10, 2024
            </p>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--heading-color)",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              Setting Boundaries Without Guilt: A Therapist's Perspective
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
                marginBottom: "14px",
              }}
            >
              Why boundaries are essential for mental health and how to set them
              with compassion.
            </p>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#7a7a7a",
              }}
            >
              Read More →
            </span>
          </div>

          {/* CARD 4 */}
          <div>
            <div
              style={{
                width: "100%",
                height: "280px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/images/about-calm.jpg"
                alt="Calm healing space"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#8a8a8a",
                marginBottom: "10px",
              }}
            >
              Dec 10, 2024
            </p>

            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--heading-color)",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              Setting Boundaries Without Guilt: A Therapist's Perspective
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "var(--text-color)",
                marginBottom: "14px",
              }}
            >
              Why boundaries are essential for mental health and how to set them
              with compassion.
            </p>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#7a7a7a",
              }}
            >
              Read More →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
