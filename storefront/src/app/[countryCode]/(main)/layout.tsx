import { getBaseURL } from "@lib/util/env";
import { Metadata } from "next";
import "styles/globals.css";
import Footer from "@modules/layout/templates/footer";
import Nav from "@modules/layout/templates/nav";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  );
}