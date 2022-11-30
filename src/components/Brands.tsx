import { brand1, brand2, brand3, brand4, brand5 } from "../assets/brand";

const brandsLogo = [brand1, brand2, brand3, brand4, brand5];

const Brands = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-4 pb-4">
      {brandsLogo.map((brand, index) => {
        return (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8">
            <img className="mx-auto" src={brand} alt="Monst" />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
