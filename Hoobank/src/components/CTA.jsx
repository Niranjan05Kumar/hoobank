import styles, { layout } from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`flex items-center flex-col md:flex-row py-10 bg-black-gradient-2 px-10 rounded-2xl mt-10 gap-5`}
  >
    <div
      className={`flex w-[100%] md:w-[70%] ${styles.flexStart} flex-col sm:gap-y-6 gap-y-3`}
    >
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} sm:text-[18px] sm:w-[60%] w-[100%]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div>
      <Button />
    </div>
  </section>
);

export default CTA;
