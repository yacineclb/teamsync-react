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
  title: 'Test the button component',
  assignedUser: 2,
  author: 1,
  description: 'Create a test for the button component',
  status: IssueStatus.TODO,
  projectId: 1,
};

const anotherIssue: Issue = {
  id: 2,
  title: 'Another issue very complex',
  assignedUser: 2,
  author: 1,
  description: 'This is a very complex issue',
  status: IssueStatus.TODO,
  projectId: 1,
};

const lastIssue: Issue = {
  id: 2,
  title: 'Last issue of the project',
  assignedUser: 2,
  author: 1,
  description: 'This is the last issue.',
  status: IssueStatus.TODO,
  projectId: 1,
};

export const issues: Issue[] = [btnIssue, testIssue, anotherIssue, lastIssue];
