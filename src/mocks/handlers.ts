// mocks/handlers.ts
import { rest } from 'msw'
import { faker } from '@faker-js/faker'
import { Post } from '@interfaces/Post'

const generatePosts = (count: number): Post[] => {
  const posts: Post[] = []

  for (let i = 0; i < count; i++) {
    posts.push({
      id: faker.string.uuid(),
      title: faker.lorem.words(3),
      author: faker.person.fullName(),
      date: faker.date.past(),
      summary: faker.lorem.words(20),
      mainContent: faker.lorem.words(60),
      image: faker.image.url(),
      jobTitle: faker.person.jobType(),
    })
  }
  // Sort the posts by date
  posts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}

const allPosts = generatePosts(80)

export const handlers = [
  rest.get('http://localhost:3000/api/posts', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page')!) || 1
    const perPage = 8

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
