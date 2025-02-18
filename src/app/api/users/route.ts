import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import db from '@/lib/db';
import { users } from '@/drizzle/schema';
import { getPaginationOptions, getPaginationParams } from '@/lib/db/helpers';
import { apiResponse } from '@/lib/api-response';

export const GET = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const paginationParams = getPaginationParams(url.searchParams);
    const { limit, offset } = getPaginationOptions(paginationParams);

    const usersData = await db.query.users.findMany({
      limit: limit,
      offset: offset,
    });

    const totalCount = await db.$count(users);

    return apiResponse(request, {
      data: usersData,
      withMeta: true,
      paginationParams: {
        totalCount,
        page: paginationParams.page,
        limit: paginationParams.limit,
      },
      apiVersion: '2.0',
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    await db.insert(users).values(body);

    return NextResponse.json(
      {
        message: 'Success Create User',
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(error);
  }
};
