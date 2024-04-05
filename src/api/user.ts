import { users } from './mocks/data/users';
import { User } from './types';

export async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch('https://localhost:3000/api/users')
  
  if(!response.ok) {
    throw new Error('An error occurred while fetching the users')
  }

  const usersData = await response.json()
  return usersData;
}

export async function getUser(id: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const user = users.find((user) => user.id === id);

  if (user) {
    return user;
  } else {
    throw new Error('User not found');
  }
}

export async function addUser(newUser: User) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const userWithSameEmail = users.find((user) => user.email === newUser.email);

  if (userWithSameEmail) {
    throw new Error('User not found');
  } else {
    users.push(newUser);
    return newUser;
  }
}
