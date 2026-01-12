import { z } from "zod"

export const schemaGetUser = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    gender: z.string(),
    status: z.string()
  })
)