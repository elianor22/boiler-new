import type { FC, ReactNode } from 'react';

import type { LinkProps } from 'next/link';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface INavbarLinkItem extends LinkProps {
  className?: string;
  children?: ReactNode | string;
}

const NavbarLinkItem: FC<INavbarLinkItem> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      data-testid="navbar_link_item"
      className={cn(className, 'hover:text-green-300')}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavbarLinkItem;
