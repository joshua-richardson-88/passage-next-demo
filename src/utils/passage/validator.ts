import { left, right } from 'fp-ts/lib/TaskEither'
import { z } from 'zod'

import type { TaskEither } from 'fp-ts/lib/TaskEither'

export type ZodErr = { __type: 'ZodErr'; _errors: string[] }
export type ZodSuccess<S> = { __type: 'data'; data: S }

export const genZodErr = ({ _errors }: { _errors: string[] }): ZodErr => ({
  __type: 'ZodErr',
  _errors,
})
export const validator =
  <S extends z.ZodType>(s: S) =>
  (d: unknown): TaskEither<ZodErr, ZodSuccess<z.infer<S>>> => {
    const _v = s.safeParse(d)

    return _v.success
      ? right({ __type: 'data', data: { ...(_v.data as z.infer<typeof s>) } })
      : left({ __type: 'ZodErr', ..._v.error.format() })
  }
