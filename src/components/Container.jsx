import React from "react";
import SecondCalculator from "./SecondCalculator";
import ThirdCalculator from "./ThirdCalculator";
import FourthCalculator from "./FourthCalculator";
import FirstCalculator from "./FirstCalculator";
import FifthCalculator from "./FifthCalculator";
import SixthCalculator from "./SixthCalculator";

const Container = () => {
  return (
    <div className="container mx-auto flex  sm:flex-row flex-wrap gap-4 items-center justify-center mt-16 sm:mt-24">
      <FirstCalculator />
     <SecondCalculator />
     <ThirdCalculator />
     <FourthCalculator />
     <FifthCalculator />
     <SixthCalculator />
    </div>
  );
};

export default Container;
