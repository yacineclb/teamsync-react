import React, { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren;

export default function Card({ children }: CardProps) {
  return <div className="px-6 py-10 rounded-xl border border-black/10 bg-[#f3f4f6]">{children}</div>;
}
