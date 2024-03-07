import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "101Patitas",
  description: "101Patitas es un emprendimiento que se dedica a la venta de chapitas personalizadas echas en 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <main className="p-5">{children}</main>
        <footer className="text-center">
          © {new Date().getFullYear()} 101Patitas
        </footer>
      </body>
    </html>
  );
}
