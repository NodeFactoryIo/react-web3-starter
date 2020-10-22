import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo } from '.';
import './index.scss';

export default {
    title: 'Core/Logo',
    component: Logo,
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
