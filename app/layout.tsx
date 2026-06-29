import type { Metadata } from "next";
import { MarketingShell } from "./MarketingShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "designersbuild",
  description: "Marketing site for designersbuild",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MarketingShell>{children}</MarketingShell>
      </body>
    </html>
  );
}
