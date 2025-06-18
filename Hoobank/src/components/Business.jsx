import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`feature-card ${index !== (features.lenth - 1) ? "mb-4" : "mb-0"} flex gap-3 items-center py-2 px-4 rounded-[14px]`}>
    <div className="w-[36px] h-[36px] flex justify-center items-center bg-[#5fe2e642] rounded-full">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div>
      <h4 className="font-semibold text-lg text-white">{title}</h4>
      <p className="sm:w-[250px] w-[100%] lg:w-[370px] text-[#eee8] text-md ">{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section id="feature" className={`${layout.section} gap-8`}>
    <div className={`${layout.sectionInfo} gap-5`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br />
        we'll handle the money.
      </h2>

      <p className={`${styles.paragraph} max-w-[420px] sm:text-[18px] `}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button />
    </div>

    <div>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
