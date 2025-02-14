import React from 'react';

import type { ButtonProps } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  icon,
  iconPosition = 'start',
  className,
  ...props
}) => {
  return (
    <Button className={cn(className)} {...props} data-testid="icon-button">
      {iconPosition === 'start' && (
        <span className="mr-1" data-testid="icon-button-start-icon">
          {icon}
        </span>
      )}
      <span data-testid="icon-button-content">{children}</span>
      {iconPosition === 'end' && (
        <span className="ml-1" data-testid="icon-button-end-icon">
          {icon}
        </span>
      )}
    </Button>
  );
};

export default IconButton;
