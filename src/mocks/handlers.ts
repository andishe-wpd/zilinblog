// mocks/handlers.ts
import { rest } from 'msw'
import { faker } from '@faker-js/faker'

interface Post {
  id: string
  title: string
  summary: string
  mainContent: string
  picture: string
}

const generatePosts = (count: number): Post[] => {
  const posts: Post[] = []

  for (let i = 0; i < count; i++) {
    posts.push({
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      summary: faker.lorem.words(20),
      mainContent: faker.lorem.sentences(10),
      picture: faker.image.url(),
    })
  }

  return posts
}

const allPosts = generatePosts(100)

export const handlers = [
  rest.get('http://localhost:3000/api/posts', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page')!) || 1
    const perPage = 10

    const start = (page - 1) * perPage
    const end = start + perPage

    const response = {
      totalPage: Math.ceil(allPosts.length / perPage),
      currentPage: page,
      content: allPosts.slice(start, end),
    }

    return res(ctx.json(response))
  }),
]
