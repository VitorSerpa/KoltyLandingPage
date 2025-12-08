import style from "./App.module.css";

export default function Home() {
    return (
        <main className={style.contato_main_div}>
            <div className={style.contato_main_container}>
                <div className={style.contato_container_div}>
                    <h1>Nosso Contato:</h1>
                    <a href="" type="email">
                        contato@kolty.com.br
                    </a>
                    <p>(12) 3207-6926 – Oficina</p>
                    <a href="" type="email">
                        henrique@kolty.com.br
                    </a>
                    <p>(12) 9 8197-9733 – Henrique</p>
                </div>
                <div>
                    <hr className={style.linha} />
                </div>
                <div className={style.contato_container_div}>
                    <h1>Onde Estamos?</h1>
                    <p>
                        Rua Juazeiro, nº 212, Jardim Vale do Sol <br /><br />   
                        São José dos Campos/SP - Brasil | CEP: 12238-080{" "}
                    </p>
                </div>
            </div>
            <div className={style.mapa_div}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4591.634610660268!2d-45.91371502383235!3d-23.255060879011637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3553ae77249b%3A0xdbc6cd2daa923da1!2sKolty%20Engenharia!5e1!3m2!1spt-BR!2sbr!4v1765152524814!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
    );
}
