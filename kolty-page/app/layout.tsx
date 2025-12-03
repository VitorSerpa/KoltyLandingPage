import Image from "next/image";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="logo-container">
          <div className="image-container">
            <h3>Imagem da logo aqui</h3>
          </div>
          <nav className="navbar">
              <a href="">Início</a>
              <a href="">Sobre</a>
              <a href="">Máquinas</a>
              <a href="">Serviços</a>
              <a href="">Contato</a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
