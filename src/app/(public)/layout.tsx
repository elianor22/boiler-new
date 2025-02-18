import type { ReactNode } from 'react';

import BaseLayout from '@/components/layout';
import Navbar from '@/components/navbar/navbar';

const layouts = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <BaseLayout className="px-4">{children}</BaseLayout>
    </>
  );
};

export default layouts;
