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
            <img className="img-fundo" src="/images/imageFundoLogo.avif" alt="Fundo" />
            <img className="logo-img" src="/images/kolty-engenharia-logo.avif" alt="Logo" />
          </div>
          <nav className="navbar">
            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/maquinas">Máquinas</a>
            <a href="/servicos">Serviços</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>


        {children}
        <footer className="footer">
          <div className="bndes">
            <img src="/images/bndes.avif" alt="" />
            <div className="bndes-text">
              <p><b>Entre em contato e solicite seu orçamento!</b></p>
              <h3>Pague em até <span className="bold">48X</span> <br />utilizando o <span className="bold">BNDES</span></h3>
            </div>
          </div>
          <div className="redes-sociais">
            <img src="/icons/koltyIcon.avif" alt="" />
            <h2>Acompanhe nossas redes sociais</h2>
            <a href="https://www.facebook.com/KoltyEngenharia/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebookIcon.avif" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/kolty_engenharia/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagramIcon.avif" alt="Instagram" />
            </a>
          </div>
          <div className="direitos-reservados">
            <p>© 2025 Kolty Engenharia.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
