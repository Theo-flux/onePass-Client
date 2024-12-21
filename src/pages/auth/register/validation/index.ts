import { z } from 'zod';
import { email, password } from '~/types/validators/auth';

export const RegisterSchema = z.object({
  email,
  password
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
