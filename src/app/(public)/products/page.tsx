import Image from 'next/image';
import Link from 'next/link';

import { getAlbums } from '@/lib/actions/album';

const Page = async ({
  searchParams,
}: {
  searchParams: {
    _limit: number;
    _start: number;
  };
}) => {
  const params = await searchParams;
  const limit = params._limit ?? 10;
  const start = params._start ?? 0;

  const albums = await getAlbums({
    limit,
    page: start,
  });

  return (
    <div>
      Our Product
      <div className="mt-10 grid grid-cols-12 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <div className="relative h-full overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <Link href="#" className="block h-full">
                <div className="relative h-0 pb-[100%]">
                  <Image
                    className="object-cover"
                    src={`https://picsum.photos/seed/${album.id}/300/300`}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 pb-0">
                  <h2 className="title">{album.title}</h2>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
