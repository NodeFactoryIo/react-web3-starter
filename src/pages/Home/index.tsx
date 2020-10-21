import { Logo } from '../../components/Logo';
import React, { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { connectWeb3Provider, getWeb3UserInfoInConsole } from '../../ducks/ethers/web3/actions';
import { getEthersWeb3Provider } from '../../ducks/ethers/web3/selectors';
import { changeMessage } from '../../ducks/message/actions';
import { getMessage, getMessageLog } from '../../ducks/message/selectors';

export const HomePage: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const provider = useSelector(getEthersWeb3Provider);
    const message = useSelector(getMessage);
    const log = useSelector(getMessageLog);

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
                        onClick={(): void => {
                            dispatch(connectWeb3Provider());
                        }}>
                        open web3 modal
                    </button>
                )}
                <button
                    onClick={(): void => {
                        dispatch(getWeb3UserInfoInConsole());
                    }}>
                    get user info in console
                </button>
                {provider && (
                    <>
                        <h2>{message}</h2>
                        <div>
                            <input
                                value={inputMessage}
                                onChange={(e): void => setMessage(e.target.value)}
                                placeholder='enter new message'
                            />
                            <button
                                onClick={(): void => {
                                    if (inputMessage) {
                                        dispatch(changeMessage(inputMessage));
                                        setMessage('');
                                    }
                                }}>
                                Send
                            </button>
                        </div>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <td>From</td>
                                    <td>Message</td>
                                    <td>Type</td>
                                </tr>
                            </thead>
                            <tbody>
                                {[...log].reverse().map(({ sender, setter, message }, index) => (
                                    <tr key={index}>
                                        <td>{sender}</td>
                                        <td>{message}</td>
                                        <td>{setter}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </header>
        </div>
    );
};
