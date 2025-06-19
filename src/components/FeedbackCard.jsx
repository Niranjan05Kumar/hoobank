import { people01, people02, people03, quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => (
  <section className="flex flex-1 justify-between flex-col gap-4 feedback-card py-5 px-6 rounded-lg">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[40px] h-[40px] object-contain"
    />
    <div>
      <p className={`${styles.paragraph} sm:w-[300px] sm:text-[18px]`}>
        {content}
      </p>
    </div>
    <div className="flex flex-row gap-6 items-center w-full justify-start">
      <img src={img} alt={img} className="w-[58px]" />
      <div>
        <h4 className="font-bold text-lg leading-5">{name}</h4>
        <p className={`${styles.paragraph}`}>{title}</p>
      </div>
    </div>
  </section>
);

export default FeedbackCard;
