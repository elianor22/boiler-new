import { getAlbumById } from '@/lib/actions/album';

const page = async ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const albumId = await params.id;

  const album = await getAlbumById(albumId);

  return (
    <div>
      {album.title} {album.url}
    </div>
  );
};

export default page;
