import { ImageResponse } from "next/og";
import type { Lang } from "@/lib/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: { lang: Lang };
}) {
  const isRu = params.lang !== "en";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0E0E0E",
          padding: "64px",
          position: "relative",
        }}
      >
        {/* Фоновый градиент */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 80% 20%, rgba(201,166,107,0.18), transparent 60%)",
          }}
        />

        {/* Декоративная линия сверху */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,166,107,0.8), transparent)",
          }}
        />

        {/* Контент */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>

          {/* Kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(201,166,107,0.45)",
                color: "rgba(201,166,107,0.9)",
                fontSize: "18px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              {isRu ? "Москва · м. Улица 1905 года" : "Moscow · Ulitsa 1905 Goda"}
            </div>
          </div>

          {/* Заголовок */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
            }}
          >
            {isRu ? "Маникюр\nв Москве" : "Nails\nin Moscow"}
          </div>

          {/* Подзаголовок */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.60)",
              letterSpacing: "0.5px",
            }}
          >
            {isRu
              ? "Аккуратно · Стерильно · Индивидуальный подход"
              : "Clean · Safe · Personal approach"}
          </div>

          {/* Разделитель */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "rgba(201,166,107,0.7)",
              borderRadius: "1px",
              marginTop: "8px",
            }}
          />

          {/* Бренд */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(201,166,107,0.85)",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            ALENA KONINA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
