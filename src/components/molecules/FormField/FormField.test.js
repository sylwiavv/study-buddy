import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import { renderWithProviders } from '../../../helpers/renderWithProviders';

describe('Form field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="Name" id="Name" name="Name" />);
  });
});
