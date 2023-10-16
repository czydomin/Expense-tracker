"use client";
import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../page";

type ActionSectionProps = {
  onAdd: (newItem: Item) => void;
};

export default function ActionSection({ onAdd }: ActionSectionProps) {
  const options = ["Expense", "Income"];

  const [transactionName, setTransactionName] = useState("");
  const [howMuch, setHowMuch] = useState(0);
  const [type, setType] = useState("Expense");

  return (
    <div className="flex justify-between ml-5 mt-10  w-1/3">
      <input
        type="text"
        placeholder="Transaction name"
        className=" p-2 text-black"
        value={transactionName}
        onChange={(event) => setTransactionName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="p-2 text-black w-32"
        value={howMuch}
        onChange={(e) => setHowMuch(Number(e.target.value))}
      />
      <select
        className="text-black p-2"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          const newItem = {
            id: uuidv4(),
            name: transactionName,
            type: type,
            amount: howMuch,
          };
          onAdd(newItem);
          setTransactionName("");
          setHowMuch(0);
          setType("Expense");
        }}
        className="border border-1 p-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
