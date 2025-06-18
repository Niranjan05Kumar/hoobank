import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 gap-2.5 bg-discount-gradient rounded-[10px] mb-6">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <b>20%</b> Discount For <b>1 Month</b> Account
        </p>
      </div>

      <div className="flex flex-row gap-20 items-center">
        <h1 className="flex-1 font-semibold text-[12vw] leading-[14vw] sm:text-[64px] sm:leading-[72px]">
          The Next
          <br className="sm:block" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="sm:flex md:mr-4 mr-0 hidden">
          <GetStarted />
        </div>
      </div>
      <h1 className=" flex-1 font-semibold text-[10.5vw] leading-[12vw] sm:text-[64px] sm:leading-[72px]">
        Payment Method.
      </h1>
      <p
        className={`sm:text-[18px] ${styles.paragraph} text-[px] w-[100%] my-[30px] `}
      >
        Our team of experts uses a methodology to identify{" "}
        <br className="sm:flex hidden" /> the credit cards most likely to fit
        your needs. <br className="sm:flex hidden" /> We examine annual
        percentage rates, annual fees.
      </p>
    </div>

    <div className={`flex-1 flex md:my-0 my-8 relative ${styles.flexCenter}`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[60vh] object-contain z-[9]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
      <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient " />
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 bottom-16 blue__gradient " />
    </div>
    <div className="flex justify-center md:mr-4 mr-0 sm:hidden">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
