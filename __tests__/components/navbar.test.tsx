import { render } from '@testing-library/react';

import Navbar from '@/components/navbar/navbar';

describe('Should Render Navbar', () => {
  it('Should have Profile', () => {
    const container = render(<Navbar />);

    expect(container.getByText('Profile')).toBeInTheDocument();
  });
});
