import React from "react";
import { intersect } from "../../assets/images";
import { SectionHead } from "../../components";
import { data } from "./data";
import PriceList from "./PriceList";

const PriceLists = ({ background }) => {
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={background && { backgroundImage: `url(${intersect})` }}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <SectionHead
            title="Start saving time today and"
            blueTitle="choose"
            secondTitle="your best plan"
          />

          <p
            className="max-w-sm mx-auto text-lg"
            style={{ visibility: "visible" }}
          >
            Best for freelance developers who need to save their time
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          {data.map((item) => {
            return <PriceList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PriceLists;
