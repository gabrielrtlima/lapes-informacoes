import { Metadata } from "next";
import { Header } from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAPES - Centro de informações",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-50 dark:bg-zinc-800 bg-gradient-to-b from-gray-100 dark:from-zinc-800 text-zinc-900 dark:text-zinc-200 transition-colors duration-500 break-words leading-6 min-h-screen">
        <Header />
        <div className="mx-auto max-w-4xl px-6 pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
