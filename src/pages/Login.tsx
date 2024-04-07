import React from 'react';
import useSign from '../hooks/useSign';
import { User } from '../api/types';
import Button from '../components/ui/Button/Button';
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../components/ui/Input/Input';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login({
      email: data.email,
      password: data.password,
    } as User);
  };

  return (
    <section className="mt-28 flex justify-center items-center">
      <div className="border py-12 px-20 rounded-lg">
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
