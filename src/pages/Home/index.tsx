import { Logo } from '../../components/Logo';
import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { connectProvider } from '../../ducks/ethers/provider/actions';

export const HomePage: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <header className='App-header'>
                <Logo />
                <p>
                    <Trans i18nKey='home:header.description'>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </Trans>
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    {t('home:header.learn_react_action', 'Learn React')}
                </a>
                <button
                    onClick={() => {
                        dispatch(connectProvider());
                    }}>
                    open web3 modal
                </button>
            </header>
        </div>
    );
};
