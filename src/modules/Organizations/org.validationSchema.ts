import { z } from 'zod';

export const orgSchema = z
  .object({
    name: z.string().min(3),
    id: z.number(),
    License_ID: z.number(),
    Org_Status: z.string(),
    Organization_Type: z.string(),
  })
  .required();
