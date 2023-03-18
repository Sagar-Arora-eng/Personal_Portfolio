import React from "react";
import "./testimonials.css";
import ME from "../../assests/Sagar.PNG";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: ME,
    name: "Satam Waheguru",
    review: "Sagar Arora is a great developer",
  },
  {
    avatar: ME,
    name: "Satam Waheguru",
    review: "Sagar Arora is a great developer",
  },
  {
    avatar: ME,
    name: "Satam Waheguru",
    review: "Sagar Arora is a great developer",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, Index) => {
          return (
            <SwiperSlide key={Index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
