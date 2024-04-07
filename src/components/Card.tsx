import React, { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren;

export default function Card({ children }: CardProps) {
  return (
    <div className="min-w-[158px] max-w-[158px] aspect-square flex-1 flex items-center justify-center rounded-xl border border-black/10 bg-[#f3f4f6]">
      {children}
    </div>
  );
}
