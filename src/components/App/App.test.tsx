import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

it('should be able to toggle the accordion', async () => {
  render(<App />);

  const toggleAccordionBtn = screen.getByLabelText(/toggle accordion 0/i);
  expect(screen.getByText(/show/i)).toBeInTheDocument();
  userEvent.click(toggleAccordionBtn);

  await waitFor(() => {
    expect(screen.queryByText(/show/i)).not.toBeInTheDocument();
    expect(screen.getByText(/hide/i)).toBeInTheDocument();
  });
});
