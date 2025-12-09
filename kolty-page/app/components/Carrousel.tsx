"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import style from "./Carrousel.module.css"

export default function Carrousel() {
    const imagens = [
        "/images/hotWire.avif",
        "images/corteLaserFibra/imagem13.jpeg",
        "/images/cortePlasmaKolty.avif",
        "/images/oficinaCima.avif",
        "/images/usinagemSurf.avif",
        "/images/estruturaMaquina.avif",
    ];

    return (
        <div style={{ width: "100vh", margin: "0 auto" }}>
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                slidesPerView={2}   
                autoplay={{
                    delay: 0,         
                    disableOnInteraction: false,
                }}
                speed={3000}        
            >
                {imagens.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Imagem ${index}`}
                            className={style.imagemCarrousel}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
