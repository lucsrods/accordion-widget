import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({
    data: [
      {
        name: 'General Infos',
        tasks: [
          {
            description: 'Add name and surname',
            value: 10,
            checked: true,
          },
          {
            description: 'Add email',
            value: 15,
            checked: false,
          },
        ],
      },
    ],
    error: null,
  }),
}));

describe('App', () => {
  it('should be able to toggle the accordion', async () => {
    render(<App />);

    const toggleAccordionBtn = screen.getByLabelText(/show general infos/i);
    expect(screen.getByText(/show/i)).toBeInTheDocument();
    userEvent.click(toggleAccordionBtn);

    await waitFor(() => {
      expect(screen.queryByText(/show general infos/i)).not.toBeInTheDocument();
      expect(screen.getByLabelText(/hide general infos/i)).toBeInTheDocument();
    });
  });

  it('should be able to display the tasks when the accordion is open', () => {
    render(<App />);

    userEvent.click(screen.getByLabelText(/show general infos/i));

    expect(screen.getByText(/add name and surname/i)).toBeVisible();
    expect(screen.getByText(/add email/i)).toBeVisible();
  });
});
