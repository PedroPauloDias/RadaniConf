import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import DefaultLayout from "../app/defaultLayout"
import { dbConnect } from '@/app/lib/mongo';
import WhatsAppButton from "@/components/whatsAppButton";
import AutenticationPage from './autentication';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conn = await dbConnect();

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AutenticationPage>
            <div className="relative flex flex-col h-screen  ">

              <main className=" mt-2  flex-grow ">
                <DefaultLayout>
                  {children}
                </DefaultLayout>
              </main>

            </div>
            <div className="flex gap-2 justify-end mr-4 z-50 fixed bottom-2 right-1  cursor-pointer ">
              <WhatsAppButton />
            </div>
          </AutenticationPage>
        </Providers>
      </body>
    </html>
  );
}
