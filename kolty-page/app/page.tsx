import Carrousel from "./components/Carrousel";

export default function Home() {
    return (
        <main className="main-div">
            <div className="main-container">
                <p>
                    A <b>KOLTY</b> Engenharia é uma empresa brasileira que
                    desenvolve e executa projetos, a partir do zero e de acordo
                    com o pedido do cliente e suas ideias, de máquinas de
                    produção de médio e grande porte para usinagem e cortes.
                    Além de oferecer manutenção e upgrades retrofits. Atuando no
                    mercado desde 2011, com máquinas operando em mais de 10
                    estados, conta com uma equipe altamente qualificada de
                    projetistas, técnicos e engenheiros que, com soluções
                    personalizadas para problemas industriais, atende as
                    necessidades de indústrias e de pessoas físicas.
                </p>

                <h1>Especialidades</h1>

                <ul className="lista-especialidades">
                    <li>Máquinas CNC em geral</li>
                    <li>Automatização de tornos, fresadoras e retíficas</li>
                    <li>Concepção completa de máquina de corte a plasma</li>
                    <li>Fresadoras CNC do tipo router</li>
                    <li>
                        Projetos especiais computadorizados a partir do zero
                    </li>
                    <a className="btn-veja" href="/maquinas">
                        Veja nossas máquinas e serviços
                    </a>
                </ul>
            </div>
            <div className="carrousel-imagens">
                <Carrousel />
            </div>
            <div className="inicio-kolty-div">
                <img src="images\serraImg.avif" alt="" />
                <div className="inicio-kolty-text">
                    <p>
                        A Kolty iniciou suas atividades na Incubadora do Parque
                        Tecnológico UNIVAP em São José dos Campos, SP.
                        Atualmente possui sede própria na Zona Sul de São José
                        dos Campos, SP com 1000m² de área coberta, refeitório e
                        academia para os funcionários.
                    </p>
                </div>
            </div>
        </main>
    );
}
