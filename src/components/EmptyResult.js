export function EmptyResult() {
  return (
    <div className="flex flex-col p-10 space-y-5 items-center justify-center bg-Slate900 md:w-[34rem] md:rounded-r-3xl md:rounded-b-3xl md:rounded-bl-[100px] md:h-full">
      {/* Picture */}
      <img src="illustration-empty.svg" alt="calculator" className="w-52" />

      {/* Title */}
      <div className="text-Slate100 font-bold text-[1.70rem]">
        Results shown here
      </div>

      {/* Content */}
      <div className="text-Slate300 text-center text-lg">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </div>
    </div>
  );
}
