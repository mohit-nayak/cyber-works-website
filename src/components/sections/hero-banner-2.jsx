import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";
import Title from "../common/title";

const HeroBanner2 = ({
  title = "",
  description = "",
  cta = true,
  ctaText = "",
  ctaOnClick = () => {},
  artifact1,
  artifact2,
  artifactAnimation = "animate-pulse-float-5s",
}) => {
  return (
    <section className="relative h-[920px] max-h-full overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/services-hero-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={920}
          quality={100}
          alt="hero bg"
        />
      </div>

      <div className="relative mx-auto mt-40 max-w-2xl space-y-8 p-6 lg:px-8">
        {artifact1 && (
          <img
            src={artifact1}
            alt="Artifact"
            className={`absolute aspect-square h-full max-h-[352px] w-full max-w-[352px] lg:-left-[300px] lg:top-[180px] ${artifactAnimation}`}
            width={352}
            height={352}
          />
        )}
        {artifact2 && (
          <img
            src={artifact2}
            alt="Artifact"
            className={`absolute aspect-square h-full max-h-[180px] w-full max-w-[180px] lg:-right-[160px] lg:-top-[80px] ${artifactAnimation}`}
            width={180}
            height={180}
            style={{ animationDelay: "1500ms" }}
          />
        )}

        <Title variant="primary">{title}</Title>
        <p className="mx-auto max-w-lg text-center text-xl font-light text-secondary-dark">
          {description}
        </p>
        {cta && (
          <div className="flex justify-center">
            <AppButton as="link" href="/contact">
              {ctaText}
            </AppButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner2;
