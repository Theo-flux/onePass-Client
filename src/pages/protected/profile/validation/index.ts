import { z } from 'zod';
import { password } from '~/types/validators/auth';

export const ChangePwdSchema = z
  .object({
    password,
    cPassword: password
  })
  .superRefine((data, ctx) => {
    const { password, cPassword } = data;

    if (cPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ['cPassword']
      });
    }
  });

export type TChangePwdSchema = z.infer<typeof ChangePwdSchema>;
