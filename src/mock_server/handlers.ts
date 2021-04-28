import { rest } from 'msw'
import { generateRepositories } from './generateData'

let failures = 3

export const handlers = [
  rest.get('/config', (req, res, ctx) => {
    console.log(req.url.searchParams.get('failures'))
    failures = Number(req.url.searchParams.get('failures')) || 3
    res(ctx.json({}))
  }),
  rest.get('/repositories', (req, res, ctx) => {
    const result = failures > 0 ?
    res(
      ctx.status(404),
      ctx.json({ failureCounter: failures })
    ) :
    res(
      ctx.status(200),
      ctx.json(generateRepositories())
    )
    failures >= 0 && failures--
    return result
  }),
]
