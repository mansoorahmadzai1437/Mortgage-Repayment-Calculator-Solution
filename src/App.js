import { useState } from "react";
import { Results } from "./components/Results";
import { Calculator } from "./components/Calculator";

export default function App() {
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [allClear, setAllClear] = useState(true);
  const [mortgageType, setMortgageType] = useState(null);

  return (
    <div className="md:flex md:items-center md:justify-center font-plusJakartaSans bg-Slate100 h-screen w-full md:min-h-max md:min-w-max">
      {/* Box Container */}
      <div className="flex flex-col md:flex-row md:w-[68rem] md:rounded-3xl md:m-12">
        {/* Calculator */}
        <Calculator
          setMonthlyRepayment={setMonthlyRepayment}
          setTotalRepayment={setTotalRepayment}
          setAllClear={setAllClear}
          setMortgageType={setMortgageType}
          mortgageType={mortgageType}
          allClear={allClear}
        />
      </div>
    </div>
  );
}
