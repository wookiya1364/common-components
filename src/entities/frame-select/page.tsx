import React from "react";

interface IFrameSelect extends React.HTMLAttributes<HTMLSelectElement> {
  as?: React.ReactNode;
  trigger: string;
  label: string;
  value: string;
  onChange: () => void;
  options: [];
}

const FrameSelect = ({
  children,
  trigger,
  label,
  value,
  onChange,
  options,
}: IFrameSelect) => {
  return <div>{children}</div>;
};

export { FrameSelect };
