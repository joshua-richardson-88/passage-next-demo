import { createRouter } from './context'
import { z } from 'zod'

export const exampleRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (ctx.passage.user.id.length < 2 && ctx.req?.cookies['psg_auth_token']) {
      try {
        const authToken = ctx.req.cookies['psg_auth_token']

        if (authToken == null) throw new Error('no cookie found')

        const verified = await ctx.passage.validAuthToken(authToken)

        if (verified == null) throw new Error('could not verify userToken')

        return next({
          ctx: {
            ...ctx,
            user: verified,
          },
        })
      } catch (error) {
        if (error instanceof Error) console.log(error.message)
      }
    }
    return next()
  })
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve: async ({ input, ctx }) => {
      // console.log(ctx.user)
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany()
    },
  })
