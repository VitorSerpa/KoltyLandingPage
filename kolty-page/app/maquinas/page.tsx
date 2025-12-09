"use client";

import { useState } from "react";
import { marked } from "marked";
import style from "./App.module.css";

type Machine = {
    title: string;
    desc: string;
    images: string[];
    icon: string;
};

export default function Home() {
    const [selected, setSelected] = useState<Machine | null>(null);
    const [fullImage, setFullImage] = useState<string | null>(null);

    const machines: Record<string, Machine> = {
        surf: {
            title: "Surf CNC",
            desc: `
**Fresadora a Disco CNC**

A Fresadora a Disco CNC é uma máquina **100% nacional**, desenvolvida pela **KOLTY Engenharia**, utilizada principalmente para fabricação de **pranchas de surf**, podendo ser **dimensionada conforme a necessidade do cliente**.

As máquinas possuem capacidade de produção de Stand Up Paddle de até **16′ pés**.

---

## **Desempenho e Velocidade**
Com velocidades máximas que variam entre **8.000 mm/min e 20.000 mm/min**, a fresadora é capaz de produzir uma prancha de **7′ pés em até 26 minutos**, usinando inclusive a **longarina**.

A máquina pode ser configurada pelo cliente nos modelos:  
• **8′ pés (máx.)**  
• **10′ pés (máx.)**  
• **12′ pés (máx.)**  
• **14′ pés (máx.)**  
• **16′ pés (máx.)**

Essa variação influencia diretamente no preço final.

---

## **Ferramentas e Acabamento**
A máquina acompanha ferramenta de corte apropriada para:  
• **Isopor**  
• **Poliuretano**  
• **Madeira da longarina**

Realiza as viradas de borda até a linha de **edge**.

O disco é um híbrido de **diamante e carbeto**, garantindo:  
• Acabamento excepcional  
• Maior durabilidade  
`,
            images: [
                "/images/surfCNC/oficinaCima.avif",
                "/images/surfCNC/usinagemSurf.avif",
                "/images/surfCNC/imagem3.avif",
                "/images/surfCNC/imagem4.avif",
                "/images/surfCNC/imagem5.avif",
                "/images/surfCNC/imagem6.avif",
                "/images/surfCNC/imagem7.avif",
                "/images/surfCNC/imagem8.avif",
                "/images/surfCNC/imagem9.avif",
                "/images/surfCNC/imagem10.avif",
                "/images/surfCNC/imagem11.avif",
                "/images/surfCNC/imagem12.avif",
                "/images/surfCNC/imagem13.avif"
            ],

            icon: "/icons/surfIcon.avif",
        },

        corteLaserCO2: {
            title: "Corte a Laser CO2",
            desc: `**Corte a Laser CO2**

Nossa linha de máquinas a Laser possui fabricação **100% nacional**, desenvolvida pela KOLTY Engenharia, totalmente de acordo com a necessidade do cliente, como tamanho e potência definidos pelo tipo de material a ser cortado.

Ela pode ter medidas de área útil de trabalho entre **800×800mm e 3000×3000mm**, com potências de **40W a 150W**.

A máquina pode cortar ou gravar materiais como:  
• Metal  
• Madeira  
• MDF  
• Acrílicos  
• Mármore  
• Isopor  

Possui **chiller próprio** desenvolvido pela KOLTY e **fácil acesso ao porão da máquina**.

---

## **Diferenciais da Kolty Engenharia**
• Fabricação e suporte **totalmente nacionais** (não somos importadores)  
• Suporte de altura variável, permitindo gravar peças com até **400mm de altura**  
• Máquina produzida conforme a **especificação do cliente**  
• Linha de financiamento **Proger e BNDES (até 48x)**  
• Sistema de exaustão incluso  
• Minicompressor incluso  
  (para corte em metal é necessário oxigênio – **não incluso**)  

---

## **Apenas para máquinas de corte em metal**
• Caneta com ajuste automático de foco com precisão de **0.1mm**  
• Conjunto de lentes extra para corte de metais  

---

**Solicite um orçamento!**  
Pagamento em até **48x no cartão BNDES**.
`
            ,
            images: [
                "/images/corteCO2/imagem0.avif",
                "/images/corteCO2/imagem1.avif",
                "/images/corteCO2/imagem2.avif",
                "/images/corteCO2/imagem3.avif",
                "/images/corteCO2/imagem4.avif",
                "/images/corteCO2/imagem5.avif",
                "/images/corteCO2/imagem6.avif",
                "/images/corteCO2/imagem7.avif",
                "/images/corteCO2/imagem8.avif",
                "/images/corteCO2/imagem9.avif",
                "/images/corteCO2/imagem10.avif",
                "/images/corteCO2/imagem11.avif",
                "/images/corteCO2/imagem12.avif",
                "/images/corteCO2/imagem13.avif",
                "/images/corteCO2/imagem14.avif",
                "/images/corteCO2/imagem15.avif",
                "/images/corteCO2/imagem16.avif",
                "/images/corteCO2/imagem17.avif",
                "/images/corteCO2/imagem18.avif",
                "/images/corteCO2/imagem19.avif",
                "/images/corteCO2/imagem20.avif"
            ],

            icon: "/icons/corteLaserIcon.avif",
        },

        corteLaserFibra: {
            title: "Corte a Laser de Fibra",
            desc: `Equipamento de alta potência indicado para corte profissional em metais.`,
            images: ["/images/fibra1.jpg", "/images/fibra2.jpg"],
            icon: "/icons/corteLaserFibra.jpg",
        },

        router: {
            title: "Router CNC",
            desc: `Router CNC projetada para madeira, MDF, ACM e materiais compostos.`,
            images: ["/images/router1.jpg", "/images/router2.jpg"],
            icon: "/icons/routerIcon.avif",
        },

        perfiladeira: {
            title: "Perfiladeira de Telhas",
            desc: `Máquina industrial para formação contínua de telhas metálicas.`,
            images: ["/images/perfil1.jpg", "/images/perfil2.jpg"],
            icon: "/icons/perfiladeiraIcon.avif",
        },

        hotwire: {
            title: "Hotwire / Fio Quente",
            desc: `Máquina de corte térmico para isopor e espumas técnicas.`,
            images: ["/images/hot1.jpg", "/images/hot2.jpg"],
            icon: "/icons/hotWireIcon.avif",
        },

        plasma: {
            title: "Corte a Plasma",
            desc: `Máquina de corte a plasma com alta precisão.`,
            images: ["/images/plasma1.jpg", "/images/plasma2.jpg"],
            icon: "/icons/cortePlasmaIcon.avif",
        },
    };

    return (
        <main className={style.main_div}>

            <div className={style.maquinas_main_div}>
                <h1>Máquinas:</h1>

                <div className={style.div_maquinas}>
                    {Object.entries(machines).map(([key, machine]) => (
                        <div
                            key={key}
                            className={style.maquina_card}
                            onClick={() => setSelected(machine)}
                        >
                            <img src={machine.icon} />
                            <p>{machine.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className={style.modal_overlay}
                    onClick={() => setSelected(null)}
                >
                    <div
                        className={style.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{selected.title}</h2>

                        <div className={style.modal_images}>
                            {selected.images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    onClick={() => setFullImage(src)} // 👈 abre fullscreen
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>

                        <div
                            className={style.modal_text}
                            dangerouslySetInnerHTML={{
                                __html: marked.parse(selected.desc),
                            }}
                        />

                        <div className={style.close_btn}>
                            <button onClick={() => setSelected(null)}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {fullImage && (
                <div
                    className={style.fullscreen_overlay}
                    onClick={() => setFullImage(null)}
                >
                    <img src={fullImage} className={style.fullscreen_image} />
                </div>
            )}
        </main>
    );
}
