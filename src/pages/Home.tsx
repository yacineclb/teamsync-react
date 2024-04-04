import React from 'react';
import Button from '../components/ui/Button/Button';

export default function Home() {
  const [state, setState] = React.useState('');
  return (
    <div className="w-full h-full flex items-center justify-center">
      <main className="">
        <h1 className="text-3xl font-bold underline">{state}</h1>
        <div className="flex gap-2 mt-4">
          <Button
            onClick={() => {
              setState('black');
            }}
          >
            Click me!
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setState('blue');
            }}
          >
            Try me!
          </Button>
        </div>
      </main>
    </div>
  );
}
