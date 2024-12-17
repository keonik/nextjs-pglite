import {migrate}  from "@/db/migrate"

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    await migrate();

    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }