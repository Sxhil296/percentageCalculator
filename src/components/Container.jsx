import React from "react";
import SimpleCalculator from "./SimpleCalculator";

const Container = () => {
  return (
    <div className="container mx-auto flex  sm:flex-row flex-wrap gap-4 items-center justify-center h-[60vh] mt-20">
      <SimpleCalculator />
      <SimpleCalculator />
      <SimpleCalculator />
      <SimpleCalculator />
      <SimpleCalculator />
    </div>
  );
};

export default Container;
