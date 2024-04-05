import { http, HttpResponse } from 'msw';
import { users } from './data/users';
import { issues } from './data/issues';
import { Issue, Project } from '../types';
import { projects } from './data/projects';

export const handlers = [
  // Users
  http.get('https://localhost:3000/api/users', () => {
    return HttpResponse.json(users);
  }),

  http.get('https://localhost:3000/api/issues', () => {
    return HttpResponse.json(issues);
  }),

  // Issues
  http.get('https://localhost:3000/api/issues/:id', ({ params }) => {
    const id = +params.id;
    const issue = issues.find((i) => i.id === id);
    return HttpResponse.json(issue);
  }),

  http.post('https://localhost:3000/api/issues', async ({ request }) => {
    const newIssue = (await request.json()) as Issue;
    issues.push(newIssue);
    return HttpResponse.json(issues);
  }),

  http.get('https://localhost:3000/api/projects', () => {
    return HttpResponse.json(issues);
  }),

  // Projects
  http.get('https://localhost:3000/api/projects/:id', ({ params }) => {
    const id = +params.id;
    const project = issues.find((i) => i.id === id);
    return HttpResponse.json(project);
  }),

  http.post('https://localhost:3000/api/projects', async ({ request }) => {
    const newProject = (await request.json()) as Project;
    projects.push(newProject);
    return HttpResponse.json(projects);
  }),
];
