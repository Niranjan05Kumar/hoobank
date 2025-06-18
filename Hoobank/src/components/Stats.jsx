import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className="flex flex-col items-center md:justify-between md:flex-row gap-6 w-full min-h-5 my-6">
    {stats.map((stat) => (
      <div key={stat.id}
      className="flex items-center justify-center gap-3 py-[10px] rounded-lg w-[300px] h-[64px] stats">
        <h2 className="text-3xl font-semibold">{stat.value}</h2>
        <p className="text-sm uppercase text-gradient ">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
