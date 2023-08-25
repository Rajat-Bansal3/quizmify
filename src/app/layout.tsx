import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizmify",
  description:
    "Quiz platform for students and orgs based on AI for building out new and structured questions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Providers>
          <body
            className={cn(inter.className, "antialiased min-h-screen pt-16")}
          >
            <Navbar />
            {children}
          </body>
        </Providers>
      </html>
    </>
  );
}