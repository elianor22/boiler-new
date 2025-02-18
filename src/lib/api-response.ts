import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { ResponseOptions } from '@/@types/api-response';

export function apiResponse<T>(
  request: NextRequest,
  options: ResponseOptions<T>,
) {
  const {
    data,
    status = 200,
    message = 'Success',
    withMeta = false,
    paginationParams,
    apiVersion,
  } = options;

  if (!withMeta) {
    return NextResponse.json(data, { status });
  }

  const url = new URL(request.url);

  const apiVersioning = apiVersion ?? process.env.API_VERSION!;

  const baseResponse = {
    status,
    message,
    data,
  };

  if (paginationParams) {
    const { page, limit, totalCount } = paginationParams;
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        ...baseResponse,
        meta: {
          pagination: {
            page,
            limit,
            totalCount,
            totalPages,
          },
          api: {
            version: apiVersioning, // You can update this as needed
            url: url.pathname,
          },
        },
      },
      { status },
    );
  }

  return NextResponse.json(
    {
      ...baseResponse,
      meta: {
        api: {
          version: apiVersioning, // You can update this as needed
          url: url.pathname,
        },
      },
    },
    { status },
  );
}
