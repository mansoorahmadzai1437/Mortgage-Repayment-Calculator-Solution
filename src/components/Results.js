import { FilledResult } from "./FilledResult";
import { EmptyResult } from "./EmptyResult";

export function Results({
  allClear,
  totalRepayment,
  monthlyRepayment,
  mortgageType,
}) {
  return (
    <div className="bg-White md:rounded-r-3xl">
      {allClear ? (
        <EmptyResult />
      ) : (
        <FilledResult
          totalRepayment={totalRepayment}
          monthlyRepayment={monthlyRepayment}
          mortgageType={mortgageType}
        />
      )}
    </div>
  );
}
