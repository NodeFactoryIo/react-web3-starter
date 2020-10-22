import React, { FC } from 'react';
import { Logo } from '../../components/Logo';
import { Trans, useTranslation } from 'react-i18next';

export const HomePage: FC = () => {
    const { t } = useTranslation();

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
            </header>
        </div>
    );
};
