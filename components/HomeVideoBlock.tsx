import { HOME_VIDEO } from "@/lib/siteConfig";

export default function HomeVideoBlock({ lang }: { lang: "ru" | "en" }) {
  const title = lang === "ru" ? "Видео" : "Video";
  const subtitle =
    lang === "ru"
      ? "В будущем сюда можно добавить ролик на главную страницу."
      : "You can add a video to the home page later.";

  return (
    <div className="videoCard">
      <div className="videoText">
        <h3 className="h2">{title}</h3>
        <p className="muted">{subtitle}</p>
      </div>

      <div className="videoFrame">
        {HOME_VIDEO.type === "embed" ? (
          <iframe
            src={HOME_VIDEO.src}
            title={HOME_VIDEO.title ?? title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : HOME_VIDEO.type === "mp4" ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={HOME_VIDEO.poster}
            src={HOME_VIDEO.src}
          />
        ) : (
          <div className="videoPlaceholder" aria-hidden>
            <div className="videoPlaceholderInner">
              {lang === "ru" ? "Место под видео" : "Video placeholder"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
