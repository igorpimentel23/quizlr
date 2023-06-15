import rawEnv from '@env';
import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().default('https://cross-platform.rp.devfactory.com'),
});

const parsedEnv = envSchema.safeParse(rawEnv);

if (!parsedEnv.success) {
  // eslint-disable-next-line no-console
  console.error(parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;
