'use client';

import BaseLayout from '@/components/layout';

const error = () => {
  return (
    <BaseLayout>
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-lg font-bold">
          Oops.{' '}
          <span className="text-base font-normal">
            Somthing wrong when open this page
          </span>
        </h1>
      </div>
    </BaseLayout>
  );
};

export default error;
