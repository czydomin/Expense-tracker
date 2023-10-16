"use client";
import Image from "next/image";
import TopBar from "./components/TopBar";
import ActionSection from "./components/ActionSection";
import Item from "./components/Item";
import { useState } from "react";
import Legend from "./components/Legend";

export type Item = {
  id: string;
  name: string;
  type: string;
  amount: number;
};
export default function Home() {
  const [transactionList, setTransactionList] = useState<Item[]>([]);

  const [status, setStatus] = useState<"INCOME" | "EXPENSE" | "ALL">("ALL");

  const [isAscending, setIsAscending] = useState<
    "ASCENDING" | "DESCENDING" | null
  >(null);

  const incomeList = transactionList.filter((item) => {
    if (item.type === "Income") {
      return true;
    }
    return false;
  });

  const sumIncome = incomeList.reduce((a, item) => a + item.amount, 0);

  const expenseList = transactionList.filter((item) => {
    if (item.type === "Expense") {
      return true;
    }
    return false;
  });

  const sumExpense = expenseList.reduce((a, item) => a + item.amount, 0);

  return (
    <main>
      <div className="flex gap-20 mt-5 ml-5  w-1/3">
        <h1 className="text-5xl ">Expense Tracker</h1>
        <div className=" border border-1 px-5 py-2 rounded ">
          <p className="text-xl whitespace-nowrap">My budget is:</p>

          <p className="text-3xl whitespace-nowrap">
            {sumIncome - sumExpense} PLN
          </p>
        </div>
      </div>
      <ActionSection
        onAdd={(newItem) => {
          setTransactionList([...transactionList, newItem]);
        }}
      />
      <TopBar status={status} setStatus={setStatus} />
      <Legend
      value={isAscending}
        onAmountSort={() => {
          if (isAscending === "DESCENDING") {
            //2
            setIsAscending("ASCENDING");
          } else if (isAscending === "ASCENDING") {
            //3
            setIsAscending(null);
          } else {
            setIsAscending("DESCENDING"); // 1
          }
          return 0;
        }}
      />

      <div className="ml-5 bg-yellow-100 text-black  w-1/3 ">
        <ul className="flex flex-col  ">
          {[...transactionList]
            .sort((a, b) => {
              if (isAscending === "DESCENDING") {
                return b.amount - a.amount;
              } else if (isAscending === "ASCENDING") {
                return a.amount - b.amount;
              }
              return 0;
            })
            .filter((item) => {
              if (status === "INCOME" && item.type === "Income") {
                return true;
              }

              if (status === "EXPENSE" && item.type === "Expense") {
                return true;
              }
              if (status === "ALL") {
                return true;
              }
              return false;
            })
            .map((item) => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  type={item.type}
                />
              );
            })}
        </ul>
      </div>
    </main>
  );
}
