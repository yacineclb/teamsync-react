import { http, HttpResponse } from 'msw';
import { users } from './data/users';
import { issues } from './data/issues';
import { Issue, Project, User } from '../types';
import { projects } from './data/projects';
import { generateJwtToken } from '../auth';

export const handlers = [
  // Users
  http.get('https://localhost:3000/api/users', () => {
    return HttpResponse.json(users);
  }),

  http.get('https://localhost:3000/api/users/:id', ({ params }) => {
    const id = +params.id;
    const user = users.find((u) => u.id === id);
    return HttpResponse.json(user);
  }),

  http.post('https://localhost:3000/api/users', async ({ request }) => {
    const newUser = (await request.json()) as User;
    users.push(newUser);
    return HttpResponse.json(users);
  }),

  // Issues
  http.get('https://localhost:3000/api/issues', () => {
    return HttpResponse.json(issues);
  }),

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

  // Projects
  http.get('https://localhost:3000/api/projects', () => {
    return HttpResponse.json(issues);
  }),

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

  // authentication
  http.post('https://localhost:3000/api/signin', async ({ request }) => {
    const loginUser = (await request.json()) as User;
    const doesUserExist = users.find((u) => u.email === loginUser.email && u.password === loginUser.password);
    if (!doesUserExist) {
      return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 });
    }

    const jwtToken = generateJwtToken();

    return HttpResponse.json({ message: 'success', token: jwtToken });
  }),

  http.post('https://localhost:3000/api/signup', async ({ request }) => {
    const newUser = (await request.json()) as User;
    const doesUserExist = users.find((u) => u.email === newUser.email);
    if (doesUserExist) {
      return HttpResponse.json({ error: 'Email already used' }, { status: 409 });
    }

    users.push(newUser);

    return HttpResponse.json({ message: 'success' });
  }),
];
