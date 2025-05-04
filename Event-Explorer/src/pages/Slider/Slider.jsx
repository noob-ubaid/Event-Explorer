import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import FirstSlider from '../../components/AllSliderComponents/FirstSlider';
import Secondslider from '../../components/AllSliderComponents/Secondslider';
import Thirdslider from '../../components/AllSliderComponents/Thirdslider';
const Slider = () => {
    return (
       <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <FirstSlider></FirstSlider>
        </SwiperSlide>
        <SwiperSlide><Secondslider></Secondslider></SwiperSlide>
        <SwiperSlide><Thirdslider></Thirdslider></SwiperSlide>
      </Swiper>
       </>
    );
};

export default Slider;