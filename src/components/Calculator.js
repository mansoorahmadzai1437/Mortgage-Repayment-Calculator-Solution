import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { SubmitButton } from "./SubmitButton";
import { RadioOption } from "./RadioOption";
import { NumberInput } from "./NumberInput";

export function Calculator({
  setMonthlyRepayment,
  setTotalRepayment,
  setAllClear,
  setMortgageType,
  mortgageType,
}) {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [mortgageAmountEmpty, setMortgageAmountEmpty] = useState(false);
  const [mortgageTermEmpty, setMortgageTermEmpty] = useState(false);
  const [interestRateEmpty, setInterestRateEmpty] = useState(false);
  const [mortgageTypeEmpty, setMortgageTypeEmpty] = useState(false);

  function handleClearAll(e) {
    e.preventDefault();

    setMortgageAmount(0);
    setMortgageTerm(0);
    setInterestRate(0);
    setMortgageType(null);

    setMortgageAmountEmpty(false);
    setMortgageTermEmpty(false);
    setInterestRateEmpty(false);
    setMortgageTypeEmpty(false);

    setAllClear(true);
  }

  function handleMortgageAmountValue(e) {
    setMortgageAmount(e.target.value === "" ? "" : Number(e.target.value));
  }

  function handleMortgageTermValue(e) {
    setMortgageTerm(e.target.value === "" ? "" : Number(e.target.value));
  }

  function handleInterestRateValue(e) {
    setInterestRate(e.target.value === "" ? "" : Number(e.target.value));
  }

  function handleChangeMortgageType(e) {
    setMortgageType(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    if (mortgageAmount && mortgageTerm && interestRate && mortgageType) {
      setAllClear(false);
    } else {
      setAllClear(true);
    }
    if (mortgageAmount === 0 || mortgageAmount === "") {
      setMortgageAmountEmpty(true);
    } else {
      setMortgageAmountEmpty(false);
    }

    if (mortgageTerm === 0 || mortgageTerm === "") {
      setMortgageTermEmpty(true);
    } else {
      setMortgageTermEmpty(false);
    }

    if (interestRate === 0 || interestRate === "") {
      setInterestRateEmpty(true);
    } else {
      setInterestRateEmpty(false);
    }

    if (mortgageType === null) {
      setMortgageTypeEmpty(true);
    } else {
      setMortgageTypeEmpty(false);
    }

    // Calculations
    let monthlyRepaymentCalculated;
    let totalRepaymentCalculated;

    if (mortgageType === "repayment") {
      // Convert annual interest rate to monthly rate
      const monthlyInterestRate = interestRate / (12 * 100);

      // Calculate total number of payments
      const totalNumberOfPayments = mortgageTerm * 12;

      // Calculate monthly repayment
      monthlyRepaymentCalculated =
        mortgageAmount *
        ((monthlyInterestRate *
          (1 + monthlyInterestRate) ** totalNumberOfPayments) /
          ((1 + monthlyInterestRate) ** totalNumberOfPayments - 1));

      // Calculate total repayment
      totalRepaymentCalculated =
        monthlyRepaymentCalculated * totalNumberOfPayments;
    } else if (mortgageType === "interestOnly") {
      // Convert annual interest rate to monthly rate
      const monthlyInterestRate = interestRate / (12 * 100);

      // Calculate monthly repayment
      monthlyRepaymentCalculated = mortgageAmount * monthlyInterestRate;

      // Calculate total number of payments
      const totalNumberOfPayments = mortgageTerm * 12;

      // Calculate total interest paid over the term
      const totalInterestPaid =
        monthlyRepaymentCalculated * totalNumberOfPayments;

      // Calculate total repayment
      totalRepaymentCalculated = totalInterestPaid + mortgageAmount;
    }

    setMonthlyRepayment(monthlyRepaymentCalculated);
    setTotalRepayment(totalRepaymentCalculated);
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="flex flex-col md:w-[34rem]">
        {/* Calculator Part */}
        <div className="flex flex-col space-y-7 bg-White px-6 py-9 md:p-10 md:rounded-l-3xl">
          {/* Title */}
          <div className="flex flex-col space-y-2 md:flex-row md:justify-between">
            <h1 className="text-Slate900 font-bold text-[1.7rem]">
              Mortgage Calculator
            </h1>
            <button
              className="font-medium text-Slate500 underline text-left text-lg md:hover:text-Slate900 transition-all duration-300"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>

          {/* Inputs */}
          <div className="flex flex-col space-y-6">
            {/* Mortgage Amount */}
            <NumberInput
              inputLabel="Mortgage Amount"
              inputUnit="£"
              inputValue={mortgageAmount === 0 ? "" : mortgageAmount}
              handleValueChange={handleMortgageAmountValue}
              unitPosition="left"
              isEmpty={mortgageAmountEmpty}
            />

            {/* Mortgage Term and Interest Rate */}
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
              {/* Mortgage Term */}
              <NumberInput
                inputLabel="Mortgage Term"
                inputUnit="years"
                inputValue={mortgageTerm === 0 ? "" : mortgageTerm}
                handleValueChange={handleMortgageTermValue}
                unitPosition="right"
                isEmpty={mortgageTermEmpty}
              />

              {/* Interest Rate */}
              <NumberInput
                inputLabel="Interest Rate"
                inputUnit="%"
                inputValue={interestRate === 0 ? "" : interestRate}
                handleValueChange={handleInterestRateValue}
                unitPosition="right"
                isEmpty={interestRateEmpty}
              />
            </div>

            {/* Mortgage Type */}
            <div>
              <label className="font-medium text-Slate700 text-lg">
                Mortgage Type
              </label>
              <br />
              <div className="flex flex-col space-y-3 rounded-md mt-3">
                {/* Repayment */}
                <RadioOption
                  label="Repayment"
                  id="repayment"
                  value="repayment"
                  handleOnChange={handleChangeMortgageType}
                  labelFor="repayment"
                  isSelected={mortgageType === "repayment"}
                />

                {/* Interest Only */}
                <RadioOption
                  label="Interest Only"
                  id="interestOnly"
                  value="interestOnly"
                  handleOnChange={handleChangeMortgageType}
                  labelFor="interestOnly"
                  isSelected={mortgageType === "interestOnly"}
                />
                {mortgageTypeEmpty && <ErrorMessage />}
              </div>
            </div>

            <SubmitButton />
          </div>
        </div>
      </div>
    </form>
  );
}
