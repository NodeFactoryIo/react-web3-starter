import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { requireAuthorization } from '../../ducks/auth/actions';
import { Button } from '../../components/Button';

export const LoginPage: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <header className='App-header'>
                <Button
                    size='small'
                    onClick={(): void => {
                        dispatch(requireAuthorization('fakeUser', 'fakePassword'));
                    }}
                    label='Log in'
                />
            </header>
        </div>
    );
};
