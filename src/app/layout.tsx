import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The force",
  description: "Choose your side",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/star-wars"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
