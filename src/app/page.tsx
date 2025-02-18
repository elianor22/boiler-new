import Navbar from '@/components/navbar/navbar';
import BaseLayout from '@/components/layout';
import db from '@/lib/db';

export default async function Home() {
  const users = await db.query.users.findMany();

  console.log(users);

  return (
    <>
      <Navbar />
      <BaseLayout>
        <div className="flex h-full min-h-max flex-1 items-center justify-center">
          <h1 className="text-xl font-bold">Welcome to Home Page</h1>
        </div>
      </BaseLayout>
    </>
  );
}
