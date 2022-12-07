import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/handlesrs';
import SearchBar from './SearchBar';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../../test-utils';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is present', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' }});
    await screen.findByText(/Adam Romański/)
  });

  it('Hides list when the input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'ad' }});
    await screen.findByText(/Adam Romański/);

    fireEvent.change(input, { target: { value: '' }});
    const list = screen.getByLabelText('results');
    console.log(list);
    await waitFor(() => {
      expect(list).not.toBeVisible();
    });
  });
});