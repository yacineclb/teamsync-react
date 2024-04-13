import React, { useEffect } from 'react';
import useSign from '../hooks/useSign';
import { User } from '../api/types';
import Button from '../components/ui/Button/Button';
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../components/ui/Input/Input';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const LoginSchema: ZodType<FormData> = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export default function Login() {
  const { login, token, loading, error: loginError } = useSign();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    if (token !== null) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, token]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login({
      email: data.email,
      password: data.password,
    } as User);
  };

  return (
    <section className="w-full h-fit mt-12 flex justify-center">
      <div className="py-12 px-20 rounded-lg bg-white">
        <h3 className="text-3xl mb-12">Log in to your personal space</h3>
        {loginError || (loginError && <p>{loginError}</p>)}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Input placeholder="Email" error={errors.email} {...register('email', { required: true })} />
          <Input
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register('password', { required: true })}
          />
          <Button className="self-end w-fit" onClick={() => {}} disabled={loading || token !== null}>
            {loading && 'Connecting...'}
            {!loading && token === null && 'Log In'}
            {token !== null && 'Connected'}
          </Button>
        </form>
      </div>
    </section>
  );
}
