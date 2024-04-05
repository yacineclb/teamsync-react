import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

type DashboardCardProps = PropsWithChildren & {
  className?: string;
};

export default function DashboardCard({ children, className }: DashboardCardProps) {
  return <div className={cn('p-12 min-w-96 rounded-xl bg-white border border-black/20', className)}>{children}</div>;
}

type TitleProps = PropsWithChildren;

function Title({ children }: TitleProps) {
  return <div className="text-3xl font-semibold mb-6">{children}</div>;
}

DashboardCard.Title = Title;

type BodyProps = PropsWithChildren;

function Body({ children }: BodyProps) {
  return <div className="">{children}</div>;
}

DashboardCard.Body = Body;
