import { User } from './types';

export function generateJwtToken() {
  // Some complicated logic to generate a JWT token ...
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
}

type SignInInfo = { message: string; token: string };

export async function signIn(user: User): Promise<SignInInfo> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('An error occurred while sign in.');
  }

  const token = response.json();
  return token;
}

type SignUpInfo = { message: string };
export async function signUp(newUser: User): Promise<SignUpInfo> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error('User already exists');
    }
  }

  const result = response.json();
  return result;
}
