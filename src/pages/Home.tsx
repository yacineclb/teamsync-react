import React, { useEffect } from 'react';
import Button from '../components/ui/Button/Button';
import illustration from '../assets/illustration.svg';
import { useNavigate } from 'react-router-dom';
import useSign from '../hooks/useSign';

export default function Home() {
  const { token } = useSign();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, token]);

  const redirectLogin = () => {
    navigate('/login');
  };

  const redirectRegister = () => {
    navigate('/signUp');
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-28 gap-6">
      <img className="w-[500px]" src={illustration} alt="" />
      <h1 className="text-5xl font-bold">Team Sync</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Manage your projects like never before.</h2>
        <p className="text-xl">Adopt Team Sync, which combines ergonomics, ease of use and performance.</p>
      </div>
      <div className="flex gap-6">
        <Button variant="primary" className="mt-auto w-fit" onClick={redirectLogin}>
          Log in to your account
        </Button>
        <Button className="mt-auto w-fit" onClick={redirectRegister}>
          Create a new account
        </Button>
      </div>
    </div>
  );
}
