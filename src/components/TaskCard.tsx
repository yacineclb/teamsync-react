import React from 'react';
import Card from './Card';

export default function TaskCard({ text, number }: { text: string; number: number }) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-semibold text-black text-center">{number}</span>
        <span className="text-center">{text}</span>
      </div>
    </Card>
  );
}
