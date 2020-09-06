import { Logo } from '../../components/Logo';
import React, { FC } from 'react';

export const HomePage: FC = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
};
