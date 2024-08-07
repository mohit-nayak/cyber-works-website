import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AppButton from "../../common/app-button";
import Title from "../../common/title";
import { ChevronLeftIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const PostBanner = ({
  title = "",
  date = "",
  tags = [],
  bannerImgData = {},
}) => {
  const bannerImg = getImage(bannerImgData.image);

  return (
    <section className="relative max-h-full md:min-h-[920px] overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../../assets/images/services-hero-bg.png"
          formats={["png"]}
          className="w-full"
          layout="fullWidth"
          width={1440}
          height={920}
          quality={100}
          alt="hero bg"
        />
      </div>

      <div className="relative mx-auto mt-28 md:mt-40 max-w-3xl p-6 lg:px-8">
        <AppButton
          as="link"
          href="/blog#posts"
          className="mb-8 max-w-max"
          childClassName="flex !flex-row items-center gap-1.5 !py-2.5 !px-10 !pl-8 !text-base font-light"
        >
          <ChevronLeftIcon className="aspect-square h-5 w-5" />
          <span>All Posts</span>
        </AppButton>
        <Title variant="primary" className="max-w-max !text-left">
          {title}
        </Title>
        <div className="mx-auto mb-10 mt-16 flex items-center justify-between gap-6 text-center text-xl font-light text-secondary-semi-dark">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="aspect-square h-5 w-5" />
            {date}
          </div>
          <div className="flex items-center justify-center">
            {tags.map((tag) => (
              <div key={tag}>#{tag}</div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <GatsbyImage
            image={bannerImg}
            alt={bannerImgData.alt}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PostBanner;
