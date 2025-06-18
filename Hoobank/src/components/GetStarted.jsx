import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div className="bg-blue-gradient w-[100px] h-[100px] p-[2px] rounded-full cursor-pointer get-started">
      <div className="w-[100%] h-[100%] bg-zinc-950 rounded-full flex flex-col items-center justify-center">
        <p className={`flex gap-2 items-center ${styles.paragraph}`}>
          <span className="text-gradient">Get</span>
          <span>
            <img src={arrowUp} alt="arrowup" />
          </span>
        </p>
        <p className={`${styles.paragraph}`}>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
