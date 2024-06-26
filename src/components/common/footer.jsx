import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";
import FacebookIcon from "../icons/facebook";
import XIcon from "../icons/x";
import GooglePlusIcon from "../icons/google-plus";
import InstagramIcon from "../icons/instagram";
import footerData from "../../data/footer-data";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex h-[435px] max-h-full flex-col overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/footer-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
          alt="bg"
        />
      </div>

      <div className="relative mx-auto mb-10 mt-auto w-full max-w-6xl">
        <div className="lg:flex lg:justify-between">
          <div className="max-w-max lg:w-2/5">
            <Link to="/" className="flex">
              <span className="sr-only">Your Company</span>
              <img
                className="mx-auto h-auto w-48"
                src={footerData.logo}
                alt={footerData.logoAlt}
              />
            </Link>
            <p className="mt-2 text-center text-base font-light text-secondary-semi-light">
              {footerData.tagline}
            </p>
            <div className="mx-auto mt-6 flex max-w-max items-center gap-4">
              <Link to={footerData.socialLinks.facebook} target="_blank">
                <FacebookIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.x} target="_blank">
                <XIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.googlePlus} target="_blank">
                <GooglePlusIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.instagram} target="_blank">
                <InstagramIcon className="aspect-square h-10 w-10" />
              </Link>
            </div>
          </div>
          <div className="flex gap-20">
            <div>
              <h5 className="mb-5 text-base font-light uppercase text-secondary-semi-light">
                Navigate to
              </h5>
              <div className="flex flex-col gap-3">
                {footerData.navigation.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-base font-light text-secondary-semi-light hover:text-tertiary-dark"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="mb-5 text-base font-light uppercase text-secondary-semi-light">
                Check our services
              </h5>
              <div className="flex flex-col gap-3">
                {footerData.services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-base font-light text-secondary-semi-light hover:text-tertiary-dark"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Link
                to={`callto:${footerData.contact.call}`}
                className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
              >
                <CallIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
                {footerData.contact.call}
              </Link>
              <Link
                to={`mailto:${footerData.contact.email}`}
                className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
              >
                <EmailIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
                {footerData.contact.email}
              </Link>
              <div className="flex items-center gap-3 font-light text-secondary-semi-light">
                <LocationIcon className="aspect-square h-5 w-5 fill-secondary-semi-light" />
                <div>
                  {footerData.contact.location.map((locationPart, index) => (
                    <div key={index}>{locationPart}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <p className="text-base font-light text-secondary-semi-light">
              {footerData.copyright}
            </p>
            <AppButton
              variant="primary"
              childClassName="px-8 py-2 text-sm font-light"
              onClick={handleScrollToTop}
            >
              Back to top
            </AppButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
