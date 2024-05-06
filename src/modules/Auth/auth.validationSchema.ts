import { z } from 'zod';

export const signUpScehma = z
  .object({
    name: z.string().min(3),
    age: z.number(),
    email: z.string().email(),
    role: z.string(),
    password: z.string(),
    confirm_password: z.string(),
    phone: z.number(),
    gender: z.string(),
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
