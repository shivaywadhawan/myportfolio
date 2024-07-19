import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="resume">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Currently seeking <span className="text-purple">Full-time</span>{" "}
          opportunities.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Click below to download a pdf version of my resume.
        </p>
        <a
          href="./shivay-wadhawan-resume.pdf"
          download="ShivayWadhawanResume.pdf"
        >
          <MagicButton
            title="Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shivay Wadhawan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.url}
              key={info.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
