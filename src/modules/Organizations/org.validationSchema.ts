import { z } from 'zod';

export const orgSchema = z
  .object({
    name: z.string().min(3),
    License_ID: z.number(),
    Org_Status: z.string(),
    Financial_Limit_From:z.number(),
    Financial_Limit_TO:z.number(),
    Bank_account:z.number(),
     admin:z.any(),
     services:z.array(z.any())
  })
  .required();
  export type organizationBodyDto  = z.infer<typeof orgSchema>;

