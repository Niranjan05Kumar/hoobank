import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles from "../style";

const Clients = () => (
  <section className="flex flex-row flex-wrap items-center justify-between sm:gap-x-auto gap-2 sm:gap-6 sm:h-[50px] md:h-[60px] h-[8vw] my-20">
    <img src={airbnb} alt="airbnb" className="h-[100%]" />
    <img src={binance} alt="binance" className="h-[100%]" />
    <img src={dropbox} alt="dropbox" className="h-[100%]" />
    <img src={coinbase} alt="coinbase" className="h-[100%]" />
  </section>
);

export default Clients;
