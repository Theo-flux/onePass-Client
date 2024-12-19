import { z } from 'zod';
import { email, password } from '~/types/validators/auth';

export const LoginSchema = z.object({
  email,
  password
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
