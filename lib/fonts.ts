import localFont from "next/font/local";

export const gothamTitle = localFont({
  src: [{ path: "../assets/fonts/Gotham-Bold.woff2", weight: "700", style: "normal" }],
  variable: "--font-title",
  display: "swap",
});

export const gothamBody = localFont({
  src: [{ path: "../assets/fonts/Gotham-Light.woff2", weight: "300", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});