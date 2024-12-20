import { z } from 'zod';
import { email, password } from '~/types/validators/auth';

export const RegisterSchema = z.object({
  name: z
    .string({ required_error: 'Enter first and last name' })
    .trim()
    .refine((val) => val !== '', { message: 'Field is required.' }),
  email,
  password
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
