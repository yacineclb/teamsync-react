import { http, HttpResponse } from 'msw'
import { users } from './data/users'

export const handlers = [
  http.get('https://localhost:3000/api/users', () => {
    return HttpResponse.json(
      users
    )
  }),
]