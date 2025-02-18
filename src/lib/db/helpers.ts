import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
});

export type PaginationParams = z.infer<typeof paginationSchema>;

export function getPaginationParams(
  searchParams: URLSearchParams,
): PaginationParams {
  const page = searchParams.get('page');
  const limit = searchParams.get('limit');

  return paginationSchema.parse({
    page: page !== null ? page : undefined,
    limit: limit !== null ? limit : undefined,
  });
}

export function getPaginationOptions(params: PaginationParams) {
  const { page, limit } = params;
  const offset = (page - 1) * limit;

  return { limit, offset };
}
