



import { z } from 'zod';

export const permScehma = z
  .object({
    role: z.string().min(3)})
    export type permBodyDto = z.infer<typeof permScehma>;
