import { rest } from 'msw'
import { generateRepositories } from './generateData'

let failures = 3

export const handlers = [
  rest.get('/config', (req, res, ctx) => {
    failures = Number(req.url.searchParams.get('failures')) || 3
    return res(
      ctx.status(200),
      ctx.json({
        message: 'configured'
      })
    )
  }),
  rest.get('/repositories', (req, res, ctx) => {
    const result = failures > 0 ?
    res(
      ctx.status(500),
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
