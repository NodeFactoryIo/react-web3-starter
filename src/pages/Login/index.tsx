import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { requireAuthorization } from '../../ducks/auth/actions';
import { Button } from '../../components/Button';

export const LoginPage: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Button
          color="primary"
          onClick={(): void => {
            dispatch(requireAuthorization('fakeUser', 'fakePassword'));
          }}
        >
          Log in
        </Button>
      </header>
    </div>
  );
};
