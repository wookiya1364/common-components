import React, { useState } from "react";

type TChildren = {
  children: React.ReactNode;
};

export default function useReg(t: string) {
  const [step, setStep] = useState(t);
  
  const Step: React.FC<TChildren> = ({ children }) => {
    return <>{children}</>;
  };

  const Reg = ({ children }: any) => {
    const targetStep = children?.find((tStep:any) => tStep.props.name === step);
    return Object.assign(targetStep, { Step });
  };
  return [Reg, setStep];
}
