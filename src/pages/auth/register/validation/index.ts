import { z } from 'zod';
import { email, name, password } from '~/types/validators/auth';

export const RegisterSchema = z.object({
  name,
  email,
  password
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
