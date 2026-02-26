import "./app/globals.css"

export const metadata = {
  title: "Mzazigo Kenya",
  description: "Ride Booking Platform - Taxi & Boda"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
