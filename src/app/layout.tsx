import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "@/components/heading/heading";
import Footing from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ТОБЭМ ХХК",
  description:
    "About us ... TOBEM LLC. Захирлын мэндчилгээ · Компаний тухай · Үйл ажиллагаа · Удирдах болон инженер техникий ажилтнууд · Ололт амжилт.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="/static/css/styles.css" /> */}
        {/* <link rel="stylesheet" href="/static/css/gallery_styles.css" /> */}
        <link rel="stylesheet" href="/static/css/style.css" />
        {/* <link rel="stylesheet" href="/static/css/gerege/gerege.css" /> */}
        {/* <link rel="stylesheet" href="/static/css/reset.css" /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Heading />
        {children}
        <Footing />
      </body>
    </html>
  );
}
