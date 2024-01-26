import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContainerCarrousel } from "./style";
import CarrouselItem from "./CarrouselItem/CarrouselItem";
import { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Carrousel = (props) => {
  const { items, title = "" } = props;

  const [swiper, setSwiper] = useState();

  const handlePrevious = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };
  return (
    <>
      {items.length > 0 ? (
        <ContainerCarrousel>
          <div className="titleCarrousel">
            <h2>{title}</h2>
          </div>
          <Swiper
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <CarrouselItem
                  id={item.id}
                  name={item.name}
                  image={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${
                    item.image.url
                  }`}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrows">
            <IoIosArrowDropleft
              className="arrow"
              onClick={handlePrevious}
              size={30}
            />
            <IoIosArrowDropright
              className="arrow"
              onClick={handleNext}
              size={30}
            />
          </div>
        </ContainerCarrousel>
      ) : (
        <ContainerCarrousel>
          <p>Sem items semelhantes</p>
        </ContainerCarrousel>
      )}
    </>
  );
};

export default Carrousel;
