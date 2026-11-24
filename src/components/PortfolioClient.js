"use client";

import { useEffect, useState } from "react";
import {
  ACHIEVEMENTS,
  EDUCATION,
  HARD_SKILLS,
  ORGANIZATIONS,
  PROJECTS,
  SOFT_SKILLS,
  TECH_ORBIT,
  WORK_EXPERIENCE,
} from "../data/portfolio";
import AntigravityParticles from "./AntigravityParticles";
import Reveal from "./Reveal";
import { SkillIcon } from "./SkillIcons";
import TypedHeading from "./TypedHeading";
import WaveTechOrbit from "./WaveTechOrbit";

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#pengalaman-kerja", label: "Pengalaman" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#organisasi", label: "Organisasi" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pencapaian", label: "Pencapaian" },
  { href: "#keahlian", label: "Skills" },
  { href: "#kontak", label: "Kontak" },
];

function TimelineCard({ item }) {
  return (
    <article className="bg-container border border-hairline rounded-[24px] p-6 flex flex-col sm:flex-row gap-5 sm:items-start transition-colors hover:bg-container-high">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          width={72}
          height={72}
          loading="lazy"
          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl object-cover shrink-0 border border-hairline bg-surface"
        />
      ) : (
        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-surface border border-hairline flex items-center justify-center shrink-0 font-mono text-sm text-accent font-semibold">
          {item.monogram || "KT"}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-medium text-on-surface">
            {item.title}
          </h3>
          <span className="font-mono text-xs text-accent">{item.period}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <p className="text-sm font-medium text-on-surface-variant">
            {item.subtitle}
          </p>
          {item.badge && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface text-accent border border-hairline">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function PortfolioClient() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }

  function stepProject(delta) {
    setActiveProject((prev) => (prev + delta + PROJECTS.length) % PROJECTS.length);
  }

  const currentProject = PROJECTS[activeProject];

  return (
    <>
      {/* 1. Header */}
      <header className="sticky top-0 z-50 w-full">
        <div className="relative z-50 bg-white/80 dark:bg-[#121317]/80 backdrop-blur-md border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-7">
              <a
                href="#beranda"
                className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-on-surface"
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>Mazedev</span>
              </a>

              <nav
                aria-label="Navigasi utama"
                className="hidden lg:flex items-center gap-5"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"
                }
                aria-pressed={isDark}
                className="ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              <a
                href="#kontak"
                className="hidden sm:inline-flex ag-btn-primary items-center justify-center min-h-[44px] px-5 rounded-full text-sm font-medium"
              >
                Hubungi Saya
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showBanner && (
          <div className="border-t border-hairline bg-container/80 px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm">
              <div className="flex-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-on-surface text-surface font-medium">
                  2026
                </span>
                <span className="text-on-surface-variant">
                  Software Engineer · Lolos P2MW &amp; KMI Expo 2026
                </span>
                <a
                  href="#pencapaian"
                  className="font-medium text-on-surface underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Lihat pencapaian
                </a>
              </div>
              <button
                type="button"
                onClick={() => setShowBanner(false)}
                aria-label="Tutup pengumuman"
                className="w-8 h-8 rounded-full inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-high shrink-0"
              >
                &times;
              </button>
            </div>
          </div>
        )}
        </div>

        {menuOpen && (
          <>
            <div
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
              className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/45 backdrop-blur-sm"
            />
            <nav
              id="mobile-menu"
              aria-label="Navigasi seluler"
              className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white/80 dark:bg-[#121317]/80 backdrop-blur-xl border-b border-hairline shadow-lg px-4 sm:px-6 pb-5 pt-3 ag-panel-enter"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-2 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="min-h-[44px] px-3 flex items-center rounded-xl text-sm font-medium text-on-surface hover:bg-container"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </>
        )}
      </header>

      <main>
        {/* 2. Identitas (Particle Hero + Profile Showcase) */}
        <section
          id="beranda"
          className="relative overflow-hidden min-h-[76vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-16"
        >
          <AntigravityParticles variant="hero" isDark={isDark} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p
              style={{ animationDelay: "0ms" }}
              className="ag-hero-enter inline-flex items-center gap-2 text-base sm:text-lg font-medium text-on-surface mb-6"
            >
              <span
                className="w-2.5 h-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>Emannuel Henji · Mazedev</span>
            </p>

            <h1
              style={{ animationDelay: "90ms" }}
              className="ag-hero-enter ag-display-title text-4xl sm:text-6xl lg:text-[74px] font-medium text-on-surface"
            >
              Membangun produk web
              <span className="block mt-1">untuk era digital modern</span>
            </h1>

            <p
              style={{ animationDelay: "180ms" }}
              className="ag-hero-enter mt-6 text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed"
            >
              Software Engineer di KuTanya dan mahasiswa S1 Teknologi Informasi
              Universitas Tidar. Berpengalaman membangun proyek menggunakan Next.js, Laravel, dan Django.
            </p>

            <div
              style={{ animationDelay: "260ms" }}
              className="ag-hero-enter mt-9 flex flex-wrap items-center justify-center gap-3.5"
            >
              <a
                href="#proyek"
                className="ag-btn-secondary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium"
              >
                Lihat Proyek
              </a>
              <a
                href="#kontak"
                className="ag-btn-primary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium"
              >
                Mulai Kolaborasi
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <Reveal className="max-w-6xl mx-auto">
            <div className="bg-container border border-hairline rounded-[28px] p-6 sm:p-10 lg:p-14 flex flex-col md:flex-row items-center gap-8 lg:gap-14">
              <img
                src="/img/profile.png"
                alt="Foto profil Emannuel Henji"
                width={220}
                height={220}
                fetchPriority="high"
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border border-hairline shrink-0 bg-container-high"
              />
              <div className="text-center md:text-left">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2.5">
                  Magelang, Indonesia · Full-Stack Engineer
                </p>
                <h2 className="ag-display-title text-2xl sm:text-4xl font-medium text-on-surface mb-4">
                  Dari riset kebutuhan pengguna hingga produk SaaS siap pakai.
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mb-6">
                  Saat ini mengembangkan platform EdTech KuTanya (
                  <a
                    href="https://www.kutanya.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4"
                  >
                    www.kutanya.id
                  </a>
                  ) yang menghubungkan siswa dengan ribuan pengajar di seluruh
                  Indonesia melalui chat, voice call, dan video call.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                  <span className="px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface">
                    Software Engineer @ KuTanya
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface">
                    S1 TI Universitas Tidar
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 3. Gelombang Tech Stack */}
        <section
          aria-labelledby="tech-heading"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8 overflow-x-clip"
        >
          <div className="max-w-6xl mx-auto">
            <TypedHeading
              id="tech-heading"
              line1="Dirancang untuk performa web,"
              line2="dari antarmuka hingga backend."
              className="ag-display-title text-3xl sm:text-5xl font-medium text-on-surface max-w-3xl"
            />
            <WaveTechOrbit items={TECH_ORBIT} />
          </div>
        </section>

        {/* 4. Pengalaman Kerja */}
        <section
          id="pengalaman-kerja"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                Karier Profesional
              </p>
              <h2 className="ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4">
                Pengalaman Kerja
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Kontribusi rekayasa perangkat lunak dalam membangun sistem
                produksi yang melayani pengguna nyata.
              </p>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-8 space-y-4">
              {WORK_EXPERIENCE.map((item) => (
                <TimelineCard key={item.title} item={item} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* 5. Pendidikan */}
        <section
          id="pendidikan"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                Latar Akademik
              </p>
              <h2 className="ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4">
                Pendidikan
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Perjalanan studi formal yang membentuk dasar pemikiran
                komputasi dan rekayasa teknologi informasi.
              </p>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-8 space-y-4">
              {EDUCATION.map((item) => (
                <TimelineCard key={item.title} item={item} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* 6. Organisasi */}
        <section
          id="organisasi"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                Kepemimpinan &amp; Komunitas
              </p>
              <h2 className="ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4">
                Organisasi
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Keterlibatan aktif dalam organisasi akademik kampus dan
                kepemimpinan siswa.
              </p>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-8 space-y-4">
              {ORGANIZATIONS.map((item) => (
                <TimelineCard key={item.title} item={item} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* 7. Proyek Pilihan */}
        <section
          id="proyek"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="ag-display-title text-3xl sm:text-5xl font-medium text-on-surface">
                  Proyek Pilihan
                </h2>
                <p className="mt-3 text-base text-on-surface-variant max-w-xl">
                  Produk digital yang dirancang dan dibangun secara langsung,
                  mulai dari platform SaaS EdTech hingga aplikasi sekolah.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepProject(-1)}
                  aria-label="Proyek sebelumnya"
                  className="ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={() => stepProject(1)}
                  aria-label="Proyek berikutnya"
                  className="ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg"
                >
                  &rarr;
                </button>
              </div>
            </Reveal>

            <div
              key={currentProject.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ag-panel-enter"
            >
              <div className="lg:col-span-7 aspect-[848/488] rounded-[24px] overflow-hidden border border-hairline bg-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.imageAlt}
                  width={848}
                  height={488}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  {currentProject.index}
                </span>
                <h3 className="ag-display-title text-2xl sm:text-4xl font-medium text-on-surface mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                  {currentProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {currentProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {currentProject.url ? (
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ag-btn-primary inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-sm font-medium"
                  >
                    {currentProject.urlLabel}
                  </a>
                ) : (
                  <span className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface-variant">
                    Proyek Arsip Sekolah
                  </span>
                )}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECTS.map((proj, idx) => {
                const selected = idx === activeProject;
                return (
                  <button
                    key={proj.title}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveProject(idx)}
                    className={`text-left bg-container border rounded-2xl p-5 transition-colors hover:bg-container-high ${
                      selected ? "border-accent" : "border-hairline"
                    }`}
                  >
                    <p className="font-mono text-xs text-accent mb-1">
                      {proj.shortLabel}
                    </p>
                    <p className="text-base font-medium text-on-surface">
                      {proj.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {proj.shortDesc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Penghargaan & Pencapaian (dengan Logo P2MW & KMI Expo 2026) */}
        <section
          id="pencapaian"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-12">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                Rekam Prestasi
              </p>
              <h2 className="ag-display-title text-3xl sm:text-5xl font-medium text-on-surface">
                Penghargaan &amp; Pencapaian
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 90}>
                  <article className="h-full bg-container border border-hairline rounded-[24px] p-7 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="bg-white border border-hairline rounded-2xl px-4 py-2.5 h-16 inline-flex items-center justify-center">
                          <img
                            src={item.logo}
                            alt={item.logoAlt}
                            width={140}
                            height={44}
                            loading="lazy"
                            className="h-10 w-auto object-contain"
                          />
                        </div>
                        <span className="font-mono text-xs text-accent shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-on-surface mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <p className="mt-6 pt-4 border-t border-hairline font-mono text-xs text-on-surface-variant">
                      {item.issuer}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Skills (Hard Skills & Soft Skills Terpisah + Logo/Ikon) */}
        <section
          id="keahlian"
          className="border-t border-hairline py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hard Skills Section */}
            <div>
              <Reveal className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Hard Skills
                </p>
                <h2 className="ag-display-title text-3xl sm:text-4xl font-medium text-on-surface">
                  Teknologi &amp; Stack Pengembangan
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HARD_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-container border border-hairline rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-colors hover:bg-container-high"
                    >
                      <div className="w-12 h-12 rounded-xl bg-surface border border-hairline flex items-center justify-center text-accent shrink-0">
                        <SkillIcon name={skill.icon} className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-medium text-on-surface">
                          {skill.name}
                        </p>
                        <p className="text-xs font-mono text-on-surface-variant">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Soft Skills Section */}
            <div className="pt-12 border-t border-hairline">
              <Reveal className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Soft Skills
                </p>
                <h2 className="ag-display-title text-3xl sm:text-4xl font-medium text-on-surface">
                  Kepemimpinan &amp; Kolaborasi
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SOFT_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl p-5 sm:p-6 bg-[var(--inverse-bg)] text-[var(--inverse-text)] border border-hairline flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#5B97FF] shrink-0">
                        <SkillIcon name={skill.icon} className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-medium">{skill.name}</p>
                        <p className="text-sm text-[var(--inverse-muted)]">
                          {skill.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 10. CTA Kontak & Kolaborasi */}
        <section id="kontak" className="py-12 px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] bg-[#121317] text-[#F8F9FC] border border-[#2F3034] px-6 py-16 sm:px-12 sm:py-24 text-center">
              <AntigravityParticles variant="dark-cta" isDark={true} />

              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="font-mono text-xs uppercase tracking-wider text-[#5B97FF] mb-3">
                  Kontak &amp; Kolaborasi
                </p>
                <h2 className="ag-display-title text-3xl sm:text-5xl font-medium text-[#F8F9FC] mb-5">
                  Siap membangun proyek web berikutnya?
                </h2>
                <p className="text-base text-[#B2BBC5] mb-8">
                  Hubungi saya langsung melalui email atau kanal sosial media
                  berikut untuk diskusi proyek dan kolaborasi.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:emannuelhenji521@gmail.com"
                    className="min-h-[48px] px-7 rounded-full inline-flex items-center justify-center text-sm sm:text-base font-medium bg-[#F8F9FC] text-[#121317] hover:bg-[#E1E6EC] transition-colors"
                  >
                    emannuelhenji521@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emannuel-henji-pratama-putra-39b416384/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/emannuelhenji_21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://emannuelhenji.medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors"
                  >
                    Medium
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* 11. Footer (Mazedev full edge-to-edge, opacity 60%) */}
      <footer className="mt-12 border-t border-hairline pt-8 pb-8 overflow-hidden">
        <div className="w-full px-2 sm:px-4">
          <svg
            viewBox="0 0 1000 190"
            className="w-full h-auto block opacity-10 text-on-surface select-none"
            aria-hidden="true"
          >
            <text
              x="500"
              y="162"
              textAnchor="middle"
              textLength="990"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              fontFamily="Google Sans Flex, system-ui, sans-serif"
              fontWeight="600"
              fontSize="218"
              letterSpacing="-6"
            >
              Mazedev
            </text>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-on-surface-variant">
          <p>&copy; 2026 Emannuel Henji</p>
          <p className="font-mono text-xs">
            Next.js · Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
