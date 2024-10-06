export function FilledResult({
  mortgageType,
  totalRepayment,
  monthlyRepayment,
}) {
  return (
    <div className="flex flex-col p-10 px-6 space-y-5 bg-Slate900 md:w-[34rem] md:rounded-r-3xl md:rounded-b-3xl md:rounded-bl-[100px] md:h-full md:p-10">
      {/* Title */}
      <div className="text-Slate100 font-semibold text-[1.70rem]">
        Your results
      </div>
      {/* Content */}
      <div className="text-Slate300 text-lg">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </div>

      {/* Results */}
      <div className="bg-Lime rounded-xl">
        <div className="flex flex-col space-y-3 md:space-y-8 bg-Slate950 p-4 py-6 rounded-lg translate-y-1">
          {/* Monthly Repayments */}
          <div className="flex flex-col md:space-y-3 md:p-4 md:px-5">
            <div className="text-Slate300 text-lg">Your monthly repayments</div>
            <div className="text-Lime text-[2.75rem] font-bold md:text-6xl">
              £
              {mortgageType !== null
                ? monthlyRepayment.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : ""}
            </div>
          </div>

          <hr className=" border-Slate700" />

          {/* Total repayments */}
          <div className="flex flex-col space-y-2 md:space-y-2 md:px-5">
            <div className="text-Slate300 mt-2 text-lg">
              Total you'll repay over the term
            </div>
            <div className="text-white text-[1.74rem] font-bold">
              £
              {mortgageType !== null
                ? totalRepayment.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
