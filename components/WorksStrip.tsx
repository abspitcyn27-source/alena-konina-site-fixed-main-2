import Image from "next/image";
import { HOME_WORKS_IMAGES } from "@/lib/siteConfig";

export default function WorksStrip() {
  return (
    <div className="worksStrip" aria-label="Works">
      <div className="worksTrack">
        {HOME_WORKS_IMAGES.map((src) => (
          <div className="worksItem" key={src}>
            <Image
              src={src}
              alt=""
              fill
              sizes="220px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
