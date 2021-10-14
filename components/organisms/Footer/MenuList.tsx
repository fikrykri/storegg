import React from "react";
import Link from "next/link";

interface MenuListProps {
  href: string;
  title: string;
}

export default function MenuList(props: Partial<MenuListProps>) {
  const { title, href = "/" } = props;
  return (
    <>
      <li className="mb-6">
        <Link href={href}>
          <a className="text-lg color-palette-1 text-decoration-none">
            {title}
          </a>
        </Link>
      </li>
    </>
  );
}
