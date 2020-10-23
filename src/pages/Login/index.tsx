import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { requireAuthorization } from '../../ducks/auth/actions';
import { Button } from '../../components/Button';

export const Login: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <header className='App-header'>
                <Button
                    size='small'
                    onClick={(): void => {
                        dispatch(requireAuthorization());
                    }}
                    label='Log in'
                />
            </header>
        </div>
    );
};
