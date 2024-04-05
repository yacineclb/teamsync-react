import { Project, ProjectStatus } from '../../types';

const firstProject: Project = {
  id: 1,
  title: 'Button feature',
  assignedUser: [2],
  author: 1,
  description: 'Create a button component with tailwindcss',
  status: ProjectStatus.IN_PROGRESS,
  teamAccess: [1, 2],
};

const secondProject: Project = {
  id: 2,
  title: 'Redesign profile page',
  assignedUser: [2],
  author: 1,
  description: 'Redesign the profile page with a new design system.',
  status: ProjectStatus.TODO,
  teamAccess: [1, 2],
};

export const projects: Project[] = [firstProject, secondProject];
