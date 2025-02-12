import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar/navbar';
import BaseLayout from '@/components/layout';

export default function Home() {
  return (
    <>
      <Navbar />
      <BaseLayout>
        <h1>Home Page</h1>
        <Button>My Button</Button>
      </BaseLayout>
    </>
  );
}
