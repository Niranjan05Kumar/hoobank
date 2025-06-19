import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section className={`${layout.sectionReverse} gap-y-15 justify-between`}>
    <div className="w-[100%] md:max-w-[40%] relative">
      <img src={bill} alt="bill" className="w-[100%] h-[100%] object-contain z[5]" />
      <div className="absolute -left-1/2 top-0 white__gradient z-[3] rounded-full w-[100%] h-[100%]"/>
      <div className="absolute -left-1/2 bottom-0 pink__gradient z-[0] rounded-full w-[70%] h-[70%]"/>
    </div>
    <div className={`${layout.sectionInfo} md:max-w-[40%] gap-y-6`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your
        <br /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} sm:text-[18px] sm:w-[80%] w-[100%]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orcirhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex gap-x-4 h-10">
        <img src={apple} alt="apple_play" className="h-[100%] cursor-pointer" />
        <img src={google} alt="google_play" className="h-[100%] cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
