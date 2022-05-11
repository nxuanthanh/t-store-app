import banner from 'assets/images/banner.png';
import banner2 from 'assets/images/banner2.png';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';
import './banner.scss';
function Banner(props) {
  return (
    <div className="banner">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
