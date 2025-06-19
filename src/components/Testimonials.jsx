import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section className="flex flex-col w-full gap-12 relative z-[5]">
    <div className="flex flex-col md:flex-row gap-6 w-full justify-between sm:items-center border-b-1 pb-6 border-white-500">
      <h2 className={`${styles.heading2}`}>
        What people are
        <br />
        saying about us
      </h2>
      <p className={`${styles.paragraph} sm:text-[18px] w-[100%]`}>
        Everything you need to accept card payments
        <br className="hidden sm:block" /> and grow your business anywhere on
        the planet.
      </p>
    </div>

    <div className="flex flex-wrap gap-2 justify-start z-[3] flex-col sm:flex-row">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    <div className="absolute z-[0] w-[70%] h-[100%] -right-1/2 top-0 blue__gradient" />
  </section>
);

export default Testimonials;
