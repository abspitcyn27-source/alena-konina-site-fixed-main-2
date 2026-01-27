import { redirect } from "next/navigation";
import type { Lang } from "@/lib/content";

export default function BookingPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";
  redirect(`/${lang}/portfolio#booking`);
}
