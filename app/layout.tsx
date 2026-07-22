import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "ARQAX Arquitectura",
    description:
      "Estudio de arquitectura enfocado en crear espacios sobrios, precisos y duraderos.",
    icons: {
      icon: "/arqax-logo.svg",
      shortcut: "/arqax-logo.svg",
    },
    openGraph: {
      title: "ARQAX Arquitectura",
      description: "Espacios sobrios, precisos y duraderos.",
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1672,
          height: 941,
          alt: "ARQAX Arquitectura",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ARQAX Arquitectura",
      description: "Espacios sobrios, precisos y duraderos.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
