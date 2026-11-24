import "./globals.css";

export const metadata = {
  title: "Emannuel Henji | Mazedev",
  description:
    "Portofolio Emannuel Henji (Mazedev), Software Engineer di KuTanya dan Mahasiswa S1 Teknologi Informasi Universitas Tidar. Lihat proyek, pengalaman kerja, pencapaian, dan kontak.",
  authors: [{ name: "Mazedev - Emannuel Henji" }],
  verification: {
    google: "sxYBLoqbFCCvgvimaXanEKBfdFzp7A178Lz7sgQAGEA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@400;500;600&family=Google+Sans+Flex:opsz,wght@8..144,400..700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
