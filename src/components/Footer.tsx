import { brand, locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-16 bg-ivory-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p
              className="text-xl font-bold italic text-brown mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {brand.name}
            </p>
            <p className="text-sm text-brown-mid leading-relaxed">
              {brand.tagline}. 판교 백현동에서 시작해
              사람과 사람을 연결합니다.
            </p>
          </div>

          {/* Menu */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] text-brown-lt uppercase mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Menu
            </p>
            <ul className="space-y-2 text-sm text-brown-mid">
              <li><a href="#menu" className="hover:text-burgundy transition-colors">브런치</a></li>
              <li><a href="#menu" className="hover:text-burgundy transition-colors">메인 디쉬</a></li>
              <li><a href="#menu" className="hover:text-burgundy transition-colors">시즌 메뉴</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] text-brown-lt uppercase mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Social
            </p>
            <ul className="space-y-2 text-sm text-brown-mid">
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={locations[0].naverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy transition-colors"
                >
                  네이버 지도
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] text-brown-lt uppercase mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Locations
            </p>
            <ul className="space-y-2 text-sm text-brown-mid">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.naverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-burgundy transition-colors"
                  >
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-brown-lt/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-brown-lt">
            &copy; {new Date().getFullYear()} {brand.name} &middot; {brand.tagline}
          </p>
          <p className="text-[11px] text-brown-lt">
            판교 &middot; 정자 &middot; 여의도
          </p>
        </div>
      </div>
    </footer>
  );
}
