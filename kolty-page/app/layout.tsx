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
        <footer className="footer">
          <div className="bndes">
            <h4>Icone BNDES</h4>
            <div className="bndes-text">
              <p><b>Entre em contato e solicete seu orçamento!</b></p>
              <h3>Pague em até 48X  utilizando o BNDES</h3>
            </div>
          </div>
          <div className="redes-sociais">
            <h2>Acompanhe nossas redes sociais</h2>
            <h4>Icone Face e Instagram</h4>
          </div>
          <div className="direitos-reservados">
            <p>© 2021 Kolty Engenharia.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
