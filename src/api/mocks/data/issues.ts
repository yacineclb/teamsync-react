import { Issue, IssueStatus } from '../../types';

const btnIssue: Issue = {
  id: 1,
  title: 'Create button component',
  assignedUser: 2,
  author: 1,
  description: 'Create a button component with tailwindcss',
  status: IssueStatus.IN_PROGRESS,
  projectId: 1,
};

const testIssue: Issue = {
  id: 2,
  title: 'Impletement test for button component',
  assignedUser: 2,
  author: 1,
  description: 'Create a test for the button component',
  status: IssueStatus.TODO,
  projectId: 1,
};

export const issues: Issue[] = [btnIssue, testIssue];
