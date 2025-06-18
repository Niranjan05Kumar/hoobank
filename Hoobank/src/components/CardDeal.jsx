import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} gap-y-15 justify-between`}>
    <div className={`${layout.sectionInfo} md:max-w-[40%] gap-y-6`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal
        <br className="hidden sm:block" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} sm:text-[18px] sm:w-[80%] w-[100%]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    <div className="w-[100%] md:max-w-[40%]">
      <img src={card} alt="bill" className="w-[100%] h-[100%] object-contain" />
    </div>
  </section>
);

export default CardDeal;
