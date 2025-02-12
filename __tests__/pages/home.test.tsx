import { render } from '@testing-library/react';

import Home from '@/app/page';

describe('Home Page', () => {
  it('Should show Home Page', () => {
    const container = render(<Home />);

    const heading = container.getByText(/Home Page/i);

    expect(heading).toBeInTheDocument();
  });
});
