import { z } from 'zod';
import { email, name, password, url } from '~/types/validators/auth';

export const AddNewSchema = z.object({
  name,
  url,
  email,
  password
});

export type TAddNewSchema = z.infer<typeof AddNewSchema>;
