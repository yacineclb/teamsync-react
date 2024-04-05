import { User, UserRole } from '../../types';

const userAdmin = {
  id: 1,
  name: 'George Pompidou',
  email: 'george.pompidou@entreprise.com',
  password: '1234',
  role: UserRole.ADMIN,
};

const userNotAdmin = {
  id: 2,
  name: 'Fred Coroux',
  email: 'fred.coroux@entreprise.com',
  password: '1234',
  role: UserRole.USER,
};

export const users: User[] = [userAdmin, userNotAdmin];
