import React from 'react';
import { screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

const mock = new MockAdapter(axios);
const query = `{
            allArticles {
              id
              title
              category
              content
              image {
                url
              }
            }
          }`;


describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the articles are not load correctly', async () => {
    mock.onPost('/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });
});
