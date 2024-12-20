import { z } from 'zod';
import { email } from '~/types/validators/auth';

export const ForgotPwdSchema = z.object({
  email
});

export type TForgotPwdSchema = z.infer<typeof ForgotPwdSchema>;
