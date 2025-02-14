import { Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar/navbar';
import BaseLayout from '@/components/layout';
import IconButton from '@/components/button/icon-button';

export default function Home() {
  return (
    <>
      <Navbar />
      <BaseLayout>
        <h1>Home Page</h1>
        <Button>My Button</Button>
        <IconButton icon={<Clock />}>Clock</IconButton>
      </BaseLayout>
    </>
  );
}
