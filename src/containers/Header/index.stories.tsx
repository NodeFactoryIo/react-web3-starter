import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './index';
import './index.scss';

export default {
    title: 'Core/Header',
    component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
