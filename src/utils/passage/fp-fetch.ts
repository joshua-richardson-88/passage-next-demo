import { pipe } from 'fp-ts/lib/function'
import { chainW, left, right, tryCatch } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import { genZodErr } from './validator'

type FetchError = { __type: 'FetchError'; message: string; name: string }
type APIError = {
  __type: 'APIError'
  code: number
  message: string
  status: string
}
const fetchError = (e: unknown): FetchError => ({
  __type: 'FetchError',
  message: (e as Error).message,
  name: (e as Error).name,
})
const apiError = z.object({
  error: z.string(),
  status: z.string(),
})
const genAPIError = (
  code: number,
  message: string,
  status: string,
): APIError => ({ __type: 'APIError', code, message, status })
const mapAPIError = (r: Response, d: any) => {
  const p = apiError.safeParse(d)
  if (!p.success) {
    const e = { ...p.error.format() }
  }
  return p.success
    ? genAPIError(r.status, p.data.error, p.data.status)
    : genZodErr({ ...p.error.format() })
}

// generic functional fetch
const parseResponse = (r: Response) =>
  pipe(
    tryCatch(() => r.json(), fetchError),
    chainW((d) => (r.ok ? right(d) : left(mapAPIError(r, d)))),
  )

const fpFetch = (r: { u: string; o?: RequestInit }) =>
  pipe(
    tryCatch(() => fetch(r.u, r.o), fetchError),
    chainW(parseResponse),
  )

export default fpFetch
