"use client";

import { useState } from "react";

export default function BlogSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setEmail(""); // clear email after click
  };

  return (
    <section
      style={{
        backgroundColor: "#e6d9cc",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* CENTER BOX */}
        <div
          style={{
            width: "100%",
            maxWidth: "620px",
            border: "1.5px solid #ffffff",
            padding: "64px 48px",
            textAlign: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* HEADING */}
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#2f2f2f",
              marginBottom: "22px",
            }}
          >
            Stay Connected
          </h2>

          {/* TEXT */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#3f3f3f",
              marginBottom: "36px",
            }}
          >
            Sign up to receive occasional insights on anxiety, trauma recovery,
            and practical tools for mental wellness.
          </p>

          {/* FORM ROW */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            {/* EMAIL INPUT */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "14px 18px",
                border: "1.5px solid #ffffff",
                minWidth: "260px",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#2f2f2f",
                backgroundColor: "transparent",
                outline: "none",
              }}
            />

            {/* SUBSCRIBE BUTTON */}
            <button
              onClick={handleSubscribe}
              style={{
                padding: "14px 28px",
                border: "1.5px solid #ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#2f2f2f",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>

          {/* FOOTNOTE */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#5f5f5f",
            }}
          >
            Your privacy is respected. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
