import React from "react";
import Title from "../common/title";
import Carousel from "../common/carousel";
import { SwiperSlide } from "swiper/react";
import AppButton from "../common/app-button";
import BlogPreviewCard from "./blog-preview-card";

const BlogCarousel = ({ blogPosts = [] }) => {
  return (
    <section className="pt-28">
      <div className="">
        <Title variant="secondary" className="mb-10">
          Discover our featured blogs
        </Title>
        <div>
          <Carousel>
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <BlogPreviewCard post={post.frontmatter} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col items-center space-y-7">
          <p className="mt-16 max-w-[440px] text-center">
            Whether you're seeking cybersecurity strategies, cloud computing
            insights, or IT management best practices, our insightful blogs have
            you covered. Stay informed and empowered for success
          </p>
          <AppButton as="link" href="/blog" variant="primary">
            Explore More Blogs
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
