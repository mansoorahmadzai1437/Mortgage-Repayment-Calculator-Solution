export function SubmitButton() {
  return (
    <button
      className="flex space-x-4 bg-Lime active:bg-opacity-50 md:hover:bg-opacity-50 md:transition-all md:duration-300 text-xl font-bold w-full p-5 rounded-full mt-1 justify-center items-center md:w-fit md:px-10 md:py-4"
      type="submit"
    >
      <span>
        <img src="icon-calculator.svg" alt="icon" className="w-7" />
      </span>

      <span className="cursor-pointer text-Slate900 font-bold">
        Calculate Repayments
      </span>
    </button>
  );
}
