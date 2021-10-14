import React from "react";
import cx from "classnames";

interface ReachedItemProps {
  value: string;
  desc: string;
  active?: boolean;
}

export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const { value, desc, active } = props;
  const classTitle = cx({
    "me-lg-35": true,
    "ms-lg-35": active,
  });
  return (
    <>
      <div className={classTitle}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {value}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {desc}
        </p>
      </div>
    </>
  );
}
