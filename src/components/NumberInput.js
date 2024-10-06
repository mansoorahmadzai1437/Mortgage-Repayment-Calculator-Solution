import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export function NumberInput({
  inputLabel,
  inputUnit,
  inputValue,
  handleValueChange,
  unitPosition,
  isEmpty,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <label className="font-medium text-Slate700 text-lg">{inputLabel}</label>
      <br />
      <div
        className={`flex ${
          unitPosition === "right" ? "flex-row-reverse" : ""
        } border ${
          isEmpty ? "border-Red" : "border-Slate500"
        } rounded-md mt-3 border-2 focus-within:border-Lime md:hover:border-Slate900 md:transition-all md:duration-100`}
      >
        <span
          className={`${
            isEmpty ? "bg-Red" : isFocused ? "bg-Lime" : "bg-Slate100"
          } ${
            unitPosition === "right" ? "rounded-r-md" : "rounded-l-md"
          } p-3 px-4 text-xl text-center content-center ${
            isEmpty ? "text-White" : "text-Slate700"
          } font-bold `}
        >
          {inputUnit}
        </span>
        <input
          className={`w-full outline-none text-xl cursor-pointer font-bold text-Slate900 px-4 ${
            unitPosition === "right" ? "rounded-l-md" : "rounded-r-md"
          }`}
          type="number"
          step="0.01"
          min="0"
          value={inputValue}
          onChange={handleValueChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="mt-2">{isEmpty && <ErrorMessage />}</div>
    </div>
  );
}
