export function RadioOption({
  handleOnChange,
  label,
  id,
  value,
  labelFor,
  isSelected,
}) {
  return (
    <div
      className={`flex items-center space-x-5 border-2 rounded-md w-full p-4 px-2 md:p-3 ${
        isSelected ? "bg-Lime bg-opacity-15 border-Lime " : " border-Slate500"
      } md:hover:border-Lime transition-all duration-300 cursor-pointer
      `}
      onClick={() => handleOnChange({ target: { value } })}
    >
      <input
        className="peer hidden"
        type="radio"
        name="mortgageType"
        id={id}
        value={value}
        onChange={handleOnChange}
        checked={isSelected}
      />
      <span class="w-5 h-5 inline-block border-4 border-white outline outline-3 outline-Slate700 rounded-full peer-checked:bg-Lime peer-checked:outline-Lime"></span>
      <label
        htmlFor={labelFor}
        className="text-xl text-Slate900 font-bold cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
