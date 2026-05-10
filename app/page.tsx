import Image from "next/image";
import Link from "next/link";
import ContentCalendar from "@/components/ContentCalendar";
import { profile } from "@/content/profile";
import { selectedWork } from "@/content/selected-work";
import { getContentCalendarItems } from "@/lib/notion-content";

const hellomindsUrl = "https://hellominds.ai";
const towerUrl = "https://www.towerecosystem.com";

const scopeCards = [
  { label: "Idea", detail: "Audience insight, hooks, narrative direction" },
  { label: "Plan", detail: "Calendar, creative briefs, publishing rhythm" },
  { label: "Ship", detail: "Channel-native posts and campaign assets" },
  { label: "Report", detail: "Performance signals and next-cycle decisions" },
];

const productCards = [
  {
    name: "hellominds.ai",
    href: hellomindsUrl,
    description: "Agentic AI storytelling, product education, and social systems.",
    image: "/graphics/hellominds-character-preview.png",
    className: "preview-product-card--hellominds",
  },
  {
    name: "TOWER",
    href: towerUrl,
    description: "Web3 gaming updates, partnership moments, and community momentum.",
    image: "/graphics/tower-logo.png",
    className: "preview-product-card--tower",
  },
];

export default async function HomePage() {
  const contentItems = await getContentCalendarItems();
  const latestArticle = selectedWork.find((item) => item.featured) ?? selectedWork[0];
  const otherWork = selectedWork.filter((item) => item.title !== latestArticle.title);

  return (
    <main id="main-content" className="preview-pastel min-h-screen bg-[#f8efe5] text-[#241c18]">
      <section className="relative overflow-hidden">
        <div className="preview-pastel-field" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl gap-8 px-5 py-6 md:px-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(390px,1.12fr)] lg:px-12">
          <div className="flex flex-col justify-between gap-8">
            <nav className="flex items-center justify-between gap-4 text-sm">
              <Link href="/" className="font-black text-[#241c18]">
                Mariana Djum
              </Link>
              <div className="flex rounded-full border border-[#241c18]/10 bg-white/60 p-1 text-xs shadow-sm backdrop-blur sm:text-sm">
                <a href="#products" className="rounded-full px-3 py-1.5 font-semibold text-[#6d625b] transition hover:bg-[#241c18] hover:text-white">
                  Brands
                </a>
                <a href="#calendar" className="rounded-full px-3 py-1.5 font-semibold text-[#6d625b] transition hover:bg-[#241c18] hover:text-white">
                  Calendar
                </a>
                <a href="#proof" className="rounded-full px-3 py-1.5 font-semibold text-[#6d625b] transition hover:bg-[#241c18] hover:text-white">
                  Work
                </a>
              </div>
            </nav>

            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b94f68]">
                Social Media Manager at Animoca Brands
              </p>
              <h1 className="mt-4 max-w-xl text-[2.45rem] font-black leading-[1.1] tracking-normal text-[#241c18] md:text-[2.8rem] lg:text-[3.05rem]">
                I build social systems for AI and Web3 gaming products.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#665b53] md:text-[1rem]">
                I lead social operations for{" "}
                <a
                  href={hellomindsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-[#2f67c7] underline decoration-[#2f67c7]/30 underline-offset-4 transition hover:text-[#b94f68]"
                >
                  hellominds.ai
                </a>{" "}
                and{" "}
                <a
                  href={towerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-[#b94f68] underline decoration-[#b94f68]/30 underline-offset-4 transition hover:text-[#2f67c7]"
                >
                  TOWER
                </a>
                , connecting strategy, planning, publishing, and reporting into one calm operating rhythm.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#proof"
                  className="rounded-full bg-[#241c18] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b94f68]"
                >
                  View selected work
                </a>
                <a
                  href={`mailto:${profile.social.email}`}
                  className="rounded-full border border-[#241c18]/16 bg-white/55 px-5 py-3 text-sm font-bold text-[#241c18] transition hover:bg-white"
                >
                  Contact Mariana
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {scopeCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#241c18]/10 bg-white/48 p-3.5 shadow-sm backdrop-blur">
                  <p className="text-base font-black text-[#241c18]">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-5 text-[#6d625b]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex items-center">
            <div className="preview-hero-panel">
              <div className="preview-hero-panel-head">
                <p>Current portfolio focus</p>
                <span>Strategy + execution</span>
              </div>
              <div className="grid gap-4 md:grid-cols-[0.86fr_1.14fr]">
                <div className="preview-portrait-panel">
                  <Image src={profile.characterGraphic} alt="Graphic portrait of Mariana" fill priority className="object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="preview-hero-note">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b94f68]">Role</p>
                    <h2 className="mt-2 text-[1.35rem] font-black leading-tight">Social content operator for emerging product worlds.</h2>
                    <p className="mt-3 text-sm leading-6 text-[#665b53]">
                      The portfolio should feel like an organized working system: clear ownership, real brand context,
                      and proof that the ideas become shipped content.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="preview-small-proof bg-[#e8f7f3]">
                      <span>01</span>
                      <p>Product education</p>
                    </div>
                    <div className="preview-small-proof bg-[#fff0bf]">
                      <span>02</span>
                      <p>Community momentum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="products" className="bg-[#fffaf7] py-14 text-[#241c18] md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b94f68]">Brand Worlds</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal md:text-[2.65rem]">Two products, two social rhythms.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {productCards.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`preview-product-card ${product.className}`}
              >
                <div className="preview-product-visual">
                  <Image src={product.image} alt="" fill sizes="280px" className="object-contain" />
                </div>
                <div>
                  <p className="text-2xl font-black text-[#241c18]">{product.name}</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#665b53]">{product.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContentCalendar items={contentItems} />

      <section id="proof" className="bg-[#f8efe5] py-14 text-[#241c18] md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
          <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b94f68]">Selected Work</p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal md:text-[2.65rem]">Proof without overexplaining.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#665b53]">
              A few public pieces stay here as proof points, while the calendar above carries the operating system.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <article className="rounded-[1.5rem] border border-[#241c18]/10 bg-white/60 p-5 shadow-sm backdrop-blur md:p-6">
              <div className="preview-linkedin-feature">
                <Image
                  src="/graphics/linkedin-latest-preview.jpg"
                  alt="Preview image for Mariana's LinkedIn article about sovereign AI agency and hard-coded protocols"
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#b94f68]">{latestArticle.eyebrow}</p>
              <h3 className="mt-2 max-w-3xl text-2xl font-black leading-tight tracking-normal md:text-[2rem]">{latestArticle.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#665b53]">{latestArticle.summary}</p>
              <a
                href={latestArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#241c18] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b94f68]"
              >
                Read on LinkedIn
              </a>
            </article>

            <div className="grid gap-5">
              {otherWork.map((work, index) => (
                <article
                  key={work.title}
                  className={`rounded-[1.5rem] border border-[#241c18]/10 p-5 shadow-sm ${
                    index % 2 === 0 ? "bg-[#e8f7f3]" : "bg-[#fff0bf]"
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8d5d2b]">{work.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-black leading-tight">{work.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#665b53]">{work.summary}</p>
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-black text-[#b94f68]">
                    Open work -&gt;
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
