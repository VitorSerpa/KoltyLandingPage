import style from "./App.module.css";

export default function Home() {
    return (
        <main className={style.main_div}>
            <div className={style.main_container}>
                <h1>Sobre nós</h1>
                <p>
                    A <b>KOLTY</b> Engenharia atua no desenvolvimento e
                    instalação de máquinas industriais, fazendo também sua
                    manutenção e melhoria da eficiência de processos. Nosso foco
                    principal é, junto a micro e pequenas indústrias,
                    desenvolver soluções técnicas para eventuais problemas que
                    nossos clientes venham a enfrentar. Também no
                    desenvolvimento e solicitação de patentes de pessoa física
                    ou jurídica para assegurar que ideias inovadoras sejam
                    sempre preservadas. Trabalhando no fornecimento de produtos
                    de tecnologias inovadoras, muitas vezes não disponível no
                    mercado nacional.
                </p>
            </div>
            <div className={style.about_div}>
                <div>
                    <img src="/images/koltyFB.avif" className={style.about_image} alt="" />
                </div>
                <div  className={style.about_description}>
                    <h1>Serviço Personalizado</h1>
                    <p>
                        A empresa destaca-se pela capacidade de desenvolvimento
                        de ideias a partir dos requisitos do cliente e também
                        pela execução dos projetos para melhorar cada vez mais a
                        produtividade e qualidade dos serviços prestados pelos
                        mesmos.{" "}
                    </p>
                </div>
                <div className={style.about_description}>
                    <h1>Excelência e Profissionalismo</h1>
                    <p>
                        Nossa principal competência é oferecer serviços de alta
                        tecnologia e soluções inovadoras para o mercado
                        industrial, automobilístico e aeroespacial podendo assim
                        acompanhar o crescente mercado nacional. Uma vez que a
                        dificuldade for encontrada, a KOLTY Engenharia estará
                        pronta e disposta para encarar novos desafios e dar a
                        solução!
                    </p>
                </div>
                <div>
                    <img src="/images/cortePlasmaKolty.avif" className={style.about_image} alt="" />
                </div>
            </div>
        </main>
    );
}
