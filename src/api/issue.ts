import { Issue } from './types';

export async function getIssues(): Promise<Issue[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch('https://localhost:3000/api/issues');

  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const issuesData = await response.json();
  return issuesData;
}

export async function getIssue(id: number): Promise<Issue | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/issues/' + id);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const issuesData = await response.json();
  return issuesData;
}

export async function addIssue(newIssue: Issue): Promise<Issue[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/issues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newIssue),
  });

  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const newIssuesArray = response.json();
  return newIssuesArray;
}
