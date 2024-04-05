export enum UserRole {
  ADMIN,
  USER,
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};
