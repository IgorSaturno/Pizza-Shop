import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  './me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'jonhdoe@example.com',
      phone: '969213645',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
