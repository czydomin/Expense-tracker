import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { useState } from "react";
type LegendProps = {
  onAmountSort: () => void;
  value: "ASCENDING" | "DESCENDING" | null;
};

export default function Legend({ onAmountSort, value }: LegendProps) {
  const [sort, setSort] = useState<"NAME" | "AMOUNT">("NAME");
  return (
    <div className="bg-pink-100 text-black flex justify-between w-1/3 ml-5 p-1">
      <div
        onClick={() => {
          onAmountSort();
          setSort("AMOUNT");
        }}
        className={
          sort === "AMOUNT"
            ? "flex items-center bg-pink-400 px-2 "
            : "flex items-center bg-pink-100 px-2"
        }
      >
        <div className="flex pr-2">
          {value === "DESCENDING" ? (
            <ArrowUpIcon />
          ) : value === "ASCENDING" ? (
            <ArrowDownIcon />
          ) : null}
          <p>Amount</p>
        </div>
      </div>
      <div
        onClick={() => {
          setSort("NAME");
        }}
        className={
          sort === "NAME"
            ? "flex items-center bg-pink-400 px-2"
            : "flex items-center bg-pink-100 px-2"
        }
      >
        <div className="flex ">
          <ArrowUpIcon />
          <ArrowDownIcon />
        </div>
        <p>Transaction name</p>
      </div>
    </div>
  );
}
