import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './index';
import './index.scss';
import { Provider } from 'react-redux';
import { storeCreator } from '../../ducks/store';
import { BrowserRouter } from 'react-router-dom';
import authSlice from '../../ducks/auth/slice';

export default {
    title: 'Core/Header',
    component: Header,
} as Meta;

interface HeaderTemplateArguments {
    auth?: ReturnType<typeof authSlice.reducer>;
}

const Template: Story<HeaderTemplateArguments> = ({ auth }) => {
    return (
        <BrowserRouter>
            <Provider store={storeCreator({ auth })}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    auth: { isAuthorized: true },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
