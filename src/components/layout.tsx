import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const BaseLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('container mx-auto flex flex-1 flex-col', className)}>
      {children}
    </div>
  );
};

export default BaseLayout;
