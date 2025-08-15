import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Copy landing page Cobo",
  description: "This is a landing page for cobo. Unique propose is education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-cobo h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
