import { redirect } from "next/navigation";
import type { Lang } from "@/lib/content";

export default function BookingPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : params.lang === "es" ? "es" : "ru";
  redirect(`/${lang}/portfolio#booking`);
}
