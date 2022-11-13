import React from "react";
import styles from "./heropage.module.css";

function Index() {
  return (
    <div>
      <div className={`${styles.heroImg} flex justify-center items-center`}>
        <div className=" flex justify-center items-center">
          <h1 className="w-full max-w-[800px] text-center items-center flex justify-center font-bold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-[#FFA945] to-[#FF811D]">
            Discover the right job / workers for you
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
