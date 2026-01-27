export type MediaType =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

export const HERO_MEDIA: MediaType = {
  type: "video",
  src: "/videos/hero.mp4",
  poster: "/videos/hero-poster.jpg",
};

export type HomeVideo =
  | { type: "none" }
  | { type: "mp4"; src: string; poster?: string }
  | { type: "embed"; src: string; title?: string }; // e.g. YouTube/Vimeo embed URL

export const HOME_VIDEO: HomeVideo = {
  // Examples:
  // { type: "mp4", src: "/videos/intro.mp4", poster: "/gallery/misc/manicure-cover.png" }
  // { type: "embed", src: "https://www.youtube.com/embed/VIDEO_ID", title: "About" }
  type: "none",
};

// Services to show on Home as tiles (must match PRICE_ITEMS ids)
export const HOME_FEATURED_PRICE_IDS = [
  "manicure-light",
  "manicure-hard",
  "extensions-light",
  "extensions-hard",
  "pedicure",
  "hyperkeratosis",
] as const;

// Images to show in the "Works" strip on Home
export const HOME_WORKS_IMAGES = [
  "/gallery/manicure-light/01.png",
  "/gallery/manicure-light/03.png",
  "/gallery/manicure-hard/02.png",
  "/gallery/extensions-light/02.png",
  "/gallery/extensions-hard/01.png",
  "/gallery/misc/manicure-cover.png",
] as const;
