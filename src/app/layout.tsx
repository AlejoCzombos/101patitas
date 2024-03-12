import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const conforta = Comfortaa({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "101Patitas",
  description:
    "101Patitas es un emprendimiento que se dedica a la venta de chapitas personalizadas echas en 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={conforta.className}>
        <NavBar />
        {children}
        <footer className="text-center">
          © {new Date().getFullYear()} 101Patitas
        </footer>
      </body>
    </html>
  );
}
