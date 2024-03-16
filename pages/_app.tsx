import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Vazirmatn } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

const vazir = Vazirmatn({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <main
          className={`text-foreground bg-background ${vazir.className} overflow-hidden`}
        >
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </>
  );
}
