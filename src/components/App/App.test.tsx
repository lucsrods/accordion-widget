import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import TaskContextProvider from '../../contexts/TasksContext';

jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({
    data: [
      {
        name: 'General Infos',
        tasks: [
          {
            description: 'Add name and surname',
            value: 50,
            checked: false,
          },
          {
            description: 'Add email',
            value: 50,
            checked: false,
          },
        ],
      },
    ],
    error: null,
  }),
}));

describe('App', () => {
  beforeEach(() => {
    render(<TaskContextProvider><App /></TaskContextProvider>);
  });

  it('should be able to toggle the accordion', async () => {

    const toggleAccordionBtn = screen.getByLabelText(/show general infos/i);
    expect(screen.getByText(/show/i)).toBeInTheDocument();
    userEvent.click(toggleAccordionBtn);

    await waitFor(() => {
      expect(screen.queryByText(/show general infos/i)).not.toBeInTheDocument();
      expect(screen.getByLabelText(/hide general infos/i)).toBeInTheDocument();
    });
  });

  it('should be able to display the tasks when the accordion is open', () => {
    userEvent.click(screen.getByLabelText(/show general infos/i));

    expect(screen.getByText(/add name and surname/i)).toBeVisible();
    expect(screen.getByText(/add email/i)).toBeVisible();
  });

  it('should be able to check tasks as done, updating the normalized value', async () => {
    userEvent.click(screen.getByLabelText(/show general infos/i));

    expect(screen.getByText('0%')).toBeInTheDocument();
    
    userEvent.click(screen.getByLabelText(/add email/i));
    expect(screen.getByText('50%')).toBeInTheDocument();
  });
});
