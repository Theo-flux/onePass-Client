import { z } from 'zod';
import { lowerCaseRegex, numberRegex, specialCharcterRegex, upperCaseRegex } from '~/utils';

export const name = z
  .string({ required_error: 'Name is required' })
  .trim()
  .refine((val) => val !== '', { message: 'Field is required.' });

export const url = z.string({ required_error: 'Url is required' }).url();

export const email = z
  .string({ required_error: 'Email is required.' })
  .email('Invalid email address.');

export const password = z
  .string({ required_error: 'Password is required.' })
  .min(8, {
    message: 'Must contain at least an uppercase, lowercase, special character and a number.'
  })
  .refine((value) => upperCaseRegex.test(value), 'Password must contain atleast an uppercase.')
  .refine((value) => numberRegex.test(value), 'Password must contain atleast a number.')
  .refine(
    (value) => specialCharcterRegex.test(value),
    'Password must contain at least a special character.'
  )
  .refine((value) => lowerCaseRegex.test(value), 'Password must contain atleast a lowercase.');
