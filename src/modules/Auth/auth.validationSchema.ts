import { z } from 'zod';

export const signUpScehma = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string(),
    confirm_password: z.string(),
    phone: z.number(),
   
  })
  .required()
  .superRefine((val, ctx) => {
    if (val.password !== val.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'your password must match cpass',
        path: ['confirm_password'],
      });
    }
  });

export type signupBodyDto = z.infer<typeof signUpScehma>;
