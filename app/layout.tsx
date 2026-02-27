import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Mzazigo",
  description: "Ride anywhere with Mzazigo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="site-header">
          <div className="container header-container">
            <div className="logo">
              <Image
                src="/bike-logo.png"
                alt="MzaziGo Logo"
                width={40}
                height={40}
              />
              <h1>MzaziGo Kenya</h1>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="site-footer">
          © {new Date().getFullYear()} MzaziGo Kenya. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
