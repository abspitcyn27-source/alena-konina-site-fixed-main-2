Put your videos here (optional).

Hero background video:
  public/videos/hero.mp4
Then edit lib/siteConfig.ts and set:
  HERO_MEDIA = { type: "video", src: "/videos/hero.mp4", poster: "/gallery/misc/manicure-cover.png" }

Video block on Home:
  public/videos/intro.mp4
Then edit lib/siteConfig.ts and set:
  HOME_VIDEO = { type: "mp4", src: "/videos/intro.mp4", poster: "/gallery/misc/manicure-cover.png" }

Or embed YouTube/Vimeo:
  HOME_VIDEO = { type: "embed", src: "https://www.youtube.com/embed/VIDEO_ID" }
