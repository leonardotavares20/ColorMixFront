import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ContainerBanner } from "./style";
import { CircularProgress } from "@mui/material";

const Banner = (props) => {
  const [swiper, setSwiper] = useState();

  const { images, isLoading } = props;

  const handlePrevious = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };
  return (
    <>
      <ContainerBanner>
        {/* {isLoading && <CircularProgress color="success" />} */}
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination]}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          className="mySwiper"
        >
          {images.map((path) => (
            <SwiperSlide key={path.id}>
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcSet={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${
                    path.image.url
                  }`}
                  alt={path.image.alt}
                />
                <source
                  media="(max-width: 820px)"
                  srcSet={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${
                    path.image.url
                  }`}
                  alt={path.image.alt}
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${
                    path.image.url
                  }`}
                  alt={path.image.alt}
                />
              </picture>
            </SwiperSlide>
          ))}
         
        </Swiper>
      </ContainerBanner>
    </>
  );
};

export default Banner;
