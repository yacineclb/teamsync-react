import { User } from './types';

export async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch('https://localhost:3000/api/users');

  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const usersData = await response.json();
  return usersData;
}

export async function getUser(id: number): Promise<User | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/users/' + id);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const user = await response.json();
  return user;
}

export async function addUser(newUser: User) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error('An error occurred while creating new user');
  }

  const newUserArray = response.json();
  return newUserArray;
}
