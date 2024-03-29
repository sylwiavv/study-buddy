// import React from 'react';
// import AddUser from './AddUserTEST';
// import Dashboard from './Dashboard';
// import { screen, fireEvent } from '@testing-library/react';
// import { renderWithProviders } from 'helpers/renderWithProviders';
//
// describe('Form Field', () => {
//   it('Adds new user to the list', () => {
//     renderWithProviders(
//       <>
//         <AddUser />
//         <Dashboard />
//       </>
//     );
//     fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Graży' } });
//     fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
//     fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
//     fireEvent.click(screen.getByText('Consent'));
//     fireEvent.click(screen.getByText('Add'));
//     screen.getByText('Graży');
//   });
//   it('Prevents adding user if the consent is not checked', () => {
//     renderWithProviders(
//       <>
//         <AddUser />
//         <Dashboard />
//       </>
//     );
//     fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
//     fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
//     fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
//     fireEvent.click(screen.getByText('Add'));
//     const newUser = screen.queryByText('Grażyna');
//     expect(newUser).not.toBeInTheDocument();
//   });
// });
