"use client";

import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function TitleComponent({ children, className, ...props }: Props) {
  return (
    <h1
      {...props}
      className={twMerge(
        "md:text-[64px] text-[44px] font-[200] leading-[120%]  ",
        className
      )}
    >
      {children}
    </h1>
  );
}
