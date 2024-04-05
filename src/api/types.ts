/* eslint-disable no-unused-vars */
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


export enum IssueStatus {
  TODO,
  IN_PROGRESS,
  DONE,
  BLOCKED,
}

export type Issue = {
  id: number,
  title: string,
  assignedUser: number,
  author: number,
  description: string,
  status: IssueStatus,
  projectId: number
}