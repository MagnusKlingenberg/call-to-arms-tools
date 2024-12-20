import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Call to arms tools",
  description: "Intended to help players manage their games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
