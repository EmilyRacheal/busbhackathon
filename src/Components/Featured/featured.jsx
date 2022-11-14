import React from "react";
import FeatureCard from "../FeatureCard/featurecard";
import { cardData } from "../../Datas/datas";

function Featured() {
  return (
    <div className=" flex justify-center w-full pt-7">
      <div className="w-11/12">
        <div className="flex justify-center">
          <h1 className="font-medium text-transparent text-[50px] bg-clip-text bg-gradient-to-t from-[#FFA945] to-[#FF811D]">
            Recent Job Openings
          </h1>
        </div>

        <div className="flex justify-between flex-wrap">
          {cardData.map((items) => (
            <div className="w-[23%]">
 <FeatureCard
              img={items.img}
              name={items.name}
              title={items.title}
              body={items.body}
            />
            </div>
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
