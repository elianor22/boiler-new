import axios from 'axios';

import type { Album, Albums } from '@/@types/albums';

export const getAlbums = async ({ limit = 10, page = 0 }) => {
  try {
    const response = await axios.get<Albums>(
      'https://jsonplaceholder.typicode.com/photos',
      {
        params: {
          _limit: limit,
          _start: page * limit,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching album:', error);
    throw error;
  }
};

export const getAlbumById = async (id: number) => {
  try {
    const response = await axios.get<Album>(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
