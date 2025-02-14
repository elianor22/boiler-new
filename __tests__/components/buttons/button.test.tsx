import { render } from '@testing-library/react';

import { Button } from '@/components/ui/button';

describe('Initial tests', () => {
  it('should pass', () => {
    const container = render(<Button>button</Button>);

    expect(container.getByText('button')).toBeInTheDocument();
  });
});
