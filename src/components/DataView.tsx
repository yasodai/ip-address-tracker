import React from "react";

type Props = {
  title: string;
  value: string;
};
export function DataView({ title, value }: Props) {
  return (
    <div className="data">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}
