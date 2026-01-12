import { z } from "zod"

export const schema = z.object({
  email: z.string(),
  name: z.string(),
  status: z.string(),
  id: z.number(),
  gender: z.string()
})
