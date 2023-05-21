import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

const SiteHeader = () => {
  return (
    <nav className="container py-4 flex w-full items-center justify-between">
      <Link href={"/"}>
        <Icons.logo />
      </Link>
      <ul>
        <li>
          <Link href={"/pokemon"} className="underline underline-offset-4">
            Pokemon
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteHeader;
