import React from 'react';
import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListIte',
  component: UsersListItem,
};

const MockData = {
  name: 'Adam Romanski',
  average: '5',
  attendance: '30%',
};

const Template = (args) => <UsersListItem userData={MockData} {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: MockData,
};

export const LowAverage = Template.bind({});
LowAverage.args = {
  userData: {
    ...MockData,
    average: '2.0',
  },
};

export const MediumAverage = Template.bind({});
MediumAverage.args = {
  userData: {
    ...MockData,
    average: '3.5',
  },
};
