import React from "react";
import { BarChartIcon } from "@radix-ui/react-icons";

type TopBarProps = {
  status: string;
  setStatus: (status: "INCOME" | "EXPENSE" | "ALL") => void;
};

export default function TopBar({ status, setStatus }: TopBarProps) {
  return (
    <div className="bg-green-200 flex w-1/3 my-5 ml-5 p-2 border border-1 text-black justify-between">
      <BarChartIcon className=" h-6 w-6" />
      <div className="flex gap-4">
        <button
          onClick={() => {
            setStatus("INCOME");
          }}
          className={
            status === "INCOME"
              ? "text-white bg-green-800 px-2"
              : "text-black bg-green-200 px-2"
          }
        >
          Income
        </button>
        <button
          onClick={() => {
            setStatus("EXPENSE");
          }}
          className={
            status === "EXPENSE"
              ? "text-white bg-green-800 px-2"
              : "text-black bg-green-200 px-2"
          }
        >
          Expense
        </button>
        <button
          onClick={() => {
            setStatus("ALL");
          }}
          className={
            status === "ALL"
              ? "text-white bg-green-800 px-2"
              : "text-black bg-green-200 px-2"
          }
        >
          All
        </button>
      </div>
    </div>
  );
}
