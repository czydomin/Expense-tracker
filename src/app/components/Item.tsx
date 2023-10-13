import { useState } from "react";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";

type ItemProps = {
  name: string;
  amount: number;
  type: string;
  
};

export default function Item({ name, amount, type}: ItemProps) {
  return (
    <div className="border border-1 flex justify-between p-2 ">
      <div className="flex gap-4 items-center">
        {type === "Income" ? (
          <PlusCircledIcon className="text-green-600" />
        ) : (
          <MinusCircledIcon className="text-red-600" />
        )}
        <div> {amount} PLN</div>
      </div>
      <div>{name}</div>
    </div>
  );
}
