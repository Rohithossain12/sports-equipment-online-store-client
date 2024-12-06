// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Styles.css";
// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Yycktbm/depositphotos-105857972-stock-illustration-summer-sports-concept.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Fz3F5fM/set-of-colorful-sport-balls-and-gaming-items-vector.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/q5kWm74/sport-equipment-icon-set-78072-479.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Jp2m1rP/sport-store-shelf-1284-4731.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NtRkJ2m/picture-sports-equipment-sports-equipment-1217673-214233.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/HDm8ySw/134590977-volleyball-bowling-baseball-billiard-basketball-rugby-tennis-golf-soccer-sport-balls-equip.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/D1RdMZ6/swaz-website-kitdesigns-stroke.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/rMDmGZB/3138.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/dtn7xn1/sports-related-icons-circle-shape-24908-9610.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
