import React from "react";
import styles from "./style";

import { Navbar, Hero, Stats, Business, Billing, CardDeal , Testimonials, Clients , CTA , Footer } from "./components";

const App = () => (
  <div className="bg-[#00040f] w-full h-screen overflow-x-hidden text-[#eee]">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#00040f]`}>
      <div className={`${styles.boxWidth} ${styles.flexCenter} `}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#00040f] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-[#00040f] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal /> 
        <Testimonials />
        <Clients /> 
        <CTA /> 
        <Footer />
      </div>
    </div>


  </div>
);

export default App;
