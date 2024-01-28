import { useEffect, useState } from "react";
import { MainContentGrid } from "./style";
import CategoryItem from "./CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MainCategories = ({ id }) => {
  const [categories, setCategories] = useState([]);
  const [swiper, setSwiper] = useState();

  const handlePrevious = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };

  const idToNum = id ? parseInt(id) : null;

  const { isLoading, sendRequest: fetchCategories, error } = useHttp();

  const getCategories = (data) => {
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/main-categories`,
      getCategories
    );
  }, [fetchCategories]);

  return (
    <>
      <MainContentGrid>
        <div className="container">
          <Swiper
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
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
          >
            {categories.map((category) => (
              <SwiperSlide>
                <Link
                  activeclassname="selected"
                  key={category.id}
                  to={`/main-category/${category.id}`}
                >
                  <CategoryItem
                    name={category.name}
                    isLoading={isLoading}
                    image={category.image.url}
                    slug={category.slug}
                    isSelected={category.id === idToNum}
                    alt={category.image.alternativeText}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="arrowsContainer">
          <div className="arrows">
            <IoIosArrowDropleft
              className="arrowLeft"
              onClick={handlePrevious}
              size={45}
            />
            <IoIosArrowDropright
              className="arrowRight"
              onClick={handleNext}
              size={45}
            />
          </div>
        </div>
      </MainContentGrid>
    </>
  );
};

export default MainCategories;
