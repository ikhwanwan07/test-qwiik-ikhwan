import { z } from "zod"

export const schemaPost = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  gender: z.string(),
  status: z.string()
})