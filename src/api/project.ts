import { Project } from './types';

export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch('https://localhost:3000/api/projects');

  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const projectsData = await response.json();
  return projectsData;
}

export async function getProject(id: number): Promise<Project | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/projects/' + id);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the project');
  }

  const projectsData = await response.json();
  return projectsData;
}

export async function addProject(newProject: Project): Promise<Project[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch('https://localhost:3000/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProject),
  });

  if (!response.ok) {
    throw new Error('An error occurred while fetching the users');
  }

  const newProjectArray = response.json();
  return newProjectArray;
}
