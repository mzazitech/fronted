import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
