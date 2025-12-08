import style from "./App.module.css";

export default function Home() {
    return (
        <main className={style.main_div}>
            <div className={style.maquinas_main_div}>
                <h1>Máquinas:</h1>

                <div className={style.div_maquinas}>
                    
                    <a className={style.maquina_card} href="/maquinas/surf">
                        <img src="/icons/surfIcon.avif" alt="" />
                        <p>Surf</p>
                    </a>

                    <a className={style.maquina_card} href="/maquinas/corte-laser">
                        <img src="/icons/corteLaserIcon.avif" alt="" />
                        <p>Corte a laser</p>
                    </a>

                    <a className={style.maquina_card} href="/maquinas/router">
                        <img src="/icons/routerIcon.avif" alt="" />
                        <p>Router</p>
                    </a>

                    <a className={style.maquina_card} href="/maquinas/perfiladeira">
                        <img src="/icons/perfiladeiraIcon.avif" alt="" />
                        <p>Perfiladeira de Telhas</p>
                    </a>

                    <a className={style.maquina_card} href="/maquinas/hotwire">
                        <img src="/icons/hotWireIcon.avif" alt="" />
                        <p>Hotwire / Fio Quente</p>
                    </a>

                    <a className={style.maquina_card} href="/maquinas/plasma">
                        <img src="/icons/cortePlasmaIcon.avif" alt="" />
                        <p>Corte a Plasma</p>
                    </a>

                </div>
            </div>
        </main>
    );
}
