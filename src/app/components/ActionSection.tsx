import React from "react";

type ActionSectionProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  amount: number;
  onAmount: (value: number) => void;
  type: string;
  onSelect: (value: string) => void;
};

export default function ActionSection({
  value,
  onChange,
  onAdd,
  amount,
  onAmount,
  type,
  onSelect,
}: ActionSectionProps) {
  const options = ["Expense", "Income"];
  return (
    <div className="flex justify-between ml-5 mt-10  w-1/3">
      <input
        type="text"
        placeholder="Transaction name"
        className=" p-2 text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="p-2 text-black w-32"
        value={amount}
        onChange={(e) => onAmount(Number(e.target.value))}
      />
      <select
        className="text-black p-2"
        value={type}
        onChange={(event) => onSelect(event.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <button onClick={onAdd} className="border border-1 p-2 rounded">
        Add
      </button>
    </div>
  );
}
