import React from "react";

interface IFrameSelect extends React.HTMLAttributes<HTMLSelectElement> {
  as?: React.ReactNode;
  label?: string;
}

const FrameSelect = ({ children, className, as, label }: IFrameSelect) => {
  return <div>{children}</div>;
};

export { FrameSelect };
