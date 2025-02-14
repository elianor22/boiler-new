import { cleanup, fireEvent, render } from '@testing-library/react';

import { Clock } from 'lucide-react';

import IconButton from '@/components/button/icon-button';

describe('<IconButton/>', () => {
  it('should render the IconButton component without errors', () => {
    const { getByRole } = render(<IconButton icon="test-icon" />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should display the correct icon when provided as a prop', () => {
    const iconName = <Clock />;
    const { getByTestId } = render(<IconButton icon={iconName} />);
    const iconElement = getByTestId('icon-button-start-icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('should trigger the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();

    const { getByRole } = render(
      <IconButton icon="test-icon" onClick={onClickMock} />,
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply correct classes for different size variants', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const;

    const sizeVariants = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };

    sizes.forEach((size) => {
      const { getByTestId } = render(
        <IconButton icon={<Clock />} size={size}>
          {size !== 'icon' ? 'Button' : null}
        </IconButton>,
      );

      const button = getByTestId('icon-button');
      const expectedClasses = sizeVariants[size].split(' ');

      expectedClasses.forEach((className) => {
        expect(button).toHaveClass(className);
      });

      // Clean up after each render
      cleanup();
    });
  });
});
