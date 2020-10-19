import { Logo } from '../../components/Logo';
import React, { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { connectProvider, getUserInfoInConsole } from '../../ducks/ethers/provider/actions';
import { getEthersProvider } from '../../ducks/ethers/provider/selectors';
import { changeMessage } from '../../ducks/message/actions';
import { getMessage } from '../../ducks/message/selectors';

export const HomePage: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const provider = useSelector(getEthersProvider);
    const message = useSelector(getMessage);

    const [inputMessage, setMessage] = useState('');

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
                {!provider && (
                    <button
                        onClick={() => {
                            dispatch(connectProvider());
                        }}>
                        open web3 modal
                    </button>
                )}
                <button
                    onClick={() => {
                        dispatch(getUserInfoInConsole());
                    }}>
                    get user info in console
                </button>
                {provider && (
                    <>
                        <h2>{message}</h2>
                        <div>
                            <input
                                value={inputMessage}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='enter new message'
                            />
                            <button
                                onClick={() => {
                                    if (message) {
                                        dispatch(changeMessage(inputMessage));
                                        setMessage('');
                                    }
                                }}>
                                Send
                            </button>
                        </div>
                    </>
                )}
            </header>
        </div>
    );
};
