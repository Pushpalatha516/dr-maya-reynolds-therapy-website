export default function OfficeLocation() {
  return (
    <section
      style={{
        backgroundColor: "#1f2e2a", // deep calming dark green
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
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "38px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "28px",
            }}
          >
            My Office
          </h2>

          {/* ADDRESS */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#d6e2dc",
              marginBottom: "28px",
            }}
          >
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </p>

          {/* SESSIONS */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Sessions
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#c7d6cf",
              marginBottom: "28px",
            }}
          >
            Monday – Friday
            <br />
            By Appointment
          </p>

          {/* SERVICE AREA */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Service Area
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#c7d6cf",
            }}
          >
            In-person sessions in Santa Monica
            <br />
            Telehealth available throughout California
          </p>
        </div>

        {/* RIGHT SIDE – MAP IMAGE */}
        <div
          style={{
            width: "100%",
            height: "360px",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {/* RIGHT SIDE – INTERACTIVE MAP */}
<div
  style={{
    width: "100%",
    height: "360px",
    borderRadius: "14px",
    overflow: "hidden",
  }}
>
  <iframe
    src="https://www.google.com/maps?q=Santa+Monica+CA+90401&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </section>
  );
}
