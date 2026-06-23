
import "./globals.css";
import { gothamTitle } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const metadata = {
  title: "ORI Academy",
  description: "Academia de programación y desarrollo de videojuegos para niños",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={gothamTitle.variable}>
  <body className="min-h-screen font-body bg-white text-brand-ink antialiased">
    <Header />
    {children}
    <Footer />
    <ChatWidget />
  </body>
</html>
  );
}