'use client';

import Test from "@features/test/page";
import { Select } from "@shared/atom/select";
import { ChangeEvent } from "react";

export default function Home() {
  const options: TOption[] = [
    { label: "1", value: 2 },
    { label: "3", value: 4 },
  ];

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget);
    console.log(`You selected ${event.target.value}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Test />
      <Select
        label="label입니다."
        options={options}
        value="dd"
        onChange={handleSelect}
      ></Select>
    </main>
  );
}
