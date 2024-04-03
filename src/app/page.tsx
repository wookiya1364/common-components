"use client";
import Test from "@features/test/page";
import { Select } from "@shared/atom/select";
import { ChangeEvent, useEffect, useMemo } from "react";
import { useChaser } from "../../chaser";
import Link from "next/link";

export default function Home() {
  const { register, unRegister } = useChaser();
  const options: TOption[] = useMemo(
    () => [
      { label: "1", value: 2 },
      { label: "3", value: 4 },
    ],
    []
  );

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget);
    console.log(`You selected ${event.target.value}`);
  };

  let largeObjects:any = [];
  function allocateMassiveMemory() {
    for (let i = 0; i < 1000; i++) {
      // 대규모 배열 생성
      const largeArray = new Array(1000000).fill({key: i, data: new Array(1000).fill('A')});
      largeObjects.push(largeArray);
      
    }
    console.log("allocateMassiveMemory 해제합니다.");
    // 대규모 객체에 대한 참조 해제
    largeObjects = null;
  }
  
  
  // useEffect를 사용하여 컴포넌트 마운트 시 한 번만 register 호출
  useEffect(() => {
    register([
      { label: "1", value: 2 },
      { label: "3", value: 4 },
      { label: "5", value: 6 },
    ]);
    register(options, "options");
    register(handleSelect, "handleSelect");
    register(largeObjects, "largeObjects");


   setTimeout(() => {
     // 메모리 할당 시도
     allocateMassiveMemory();

   }, 5000);
    
    return () => {
      unRegister(options);
      unRegister(handleSelect);
    };
  }, [options, register, unRegister]); // 의존성 배열에 register를 추가

  const iter = Array.from({ length: 20 }).fill(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/hhh"}>LINK</Link>
      {iter.map((i, idx) => (
        <Test key={`${i}-${idx}`} />
      ))}
      <Select
        label="label입니다."
        options={options}
        value="dd"
        onChange={handleSelect}
      ></Select>
    </main>
  );
}
