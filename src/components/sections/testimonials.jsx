import React from "react";
import Title from "../common/title";
import testimonialsData from "../../data/testimonials-data";
import Carousel from "../common/carousel";
import { SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import StarGradient from "../icons/star-gradient";

const Testimonials = ({
  className = "",
  title = "",
  data = testimonialsData,
}) => {
  return (
    <section className={`py-28 ${className}`}>
      <div className="">
        <Title variant="secondary" className="mb-10">
          {title}
        </Title>
        <div>
          <Carousel>
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="font-semibold overflow-hidden rounded-[20px] bg-primary-gradient p-[1px]"
              >
                <div className="relative flex w-full flex-col rounded-[20px] bg-primary-dark text-lg font-light text-secondary-dark">
                  <div className="absolute left-0 top-0 h-full w-full">
                    <StaticImage
                      src="../../assets/images/shadow-bg-2.png"
                      formats={["png"]}
                      className="h-full w-full"
                      layout="fullWidth"
                      width={220}
                      height={182}
                      quality={100}
                      alt="shadow"
                    />
                  </div>
                  <div className="min-h-[450px] bg-secondary-gradient-light px-6 xl:px-10 py-8">
                    <div className="text-2xl">{testimonial.name}</div>
                    <div className="mb-3 text-base">{`${testimonial.position}, ${testimonial.company}`}</div>
                    <div className="mb-6 flex gap-x-2">
                      {Array.apply(null, Array(testimonial.rating)).map(
                        (_, index) => (
                          <StarGradient
                            key={index}
                            className="aspect-square h-full max-h-[26px] w-full max-w-[26px]"
                          />
                        ),
                      )}
                    </div>
                    <p>"{testimonial.description}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
