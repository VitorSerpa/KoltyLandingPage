import style from "./App.module.css";

export default function Home() {
    return (
        <main className={style.main_div}>
            <div className={style.servicos_main_div}>
                <div className={style.servicos_div}>
                    <div className={style.text_div}>
                        <h1>Serviços:</h1>
                        <p>
                            A KOLTY Engenharia atua no desenvolvimento e instalação
                            de máquinas industriais, fazendo também sua manutenção e
                            melhoria da eficiência de processos. Nosso foco
                            principal é, junto a micro e pequenas indústrias,
                            desenvolver soluções técnicas para eventuais problemas
                            que nossos clientes venham a enfrentar. <br /><br />Também no
                            desenvolvimento e solicitação de patentes de pessoa
                            física ou jurídica para assegurar que ideias inovadoras
                            sejam sempre preservadas. <br /><br /> Trabalhando no fornecimento de
                            produtos de tecnologias inovadoras, muitas vezes não
                            disponível no mercado nacional. Especializada em
                            máquinas CNC em geral, automatização de tornos,
                            fresadoras e retíficas, bem como a concepção total de
                            máquina de corte a plasma, fresadoras CNC do tipo router
                            e projetos especiais computadorizados a partir do zero.
                        </p>
                    </div>
                    <img src="/images/corteLaser2.avif" alt="" />
                </div>
            </div>
        </main>
    );
}
