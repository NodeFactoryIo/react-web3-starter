import React, { FC, useState } from 'react';
import { connectWeb3Provider, getWeb3UserInfoInConsole } from '../../ducks/ethers/web3/actions';
import { changeMessage } from '../../ducks/message/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getEthersWeb3Provider } from '../../ducks/ethers/web3/selectors';
import { getMessage, getMessageLog } from '../../ducks/message/selectors';
import { Button } from '../../components/Button';

const Message: FC = () => {
    const dispatch = useDispatch();
    const provider = useSelector(getEthersWeb3Provider);
    const message = useSelector(getMessage);
    const log = useSelector(getMessageLog);

    const [inputMessage, setMessage] = useState('');

    return (
        <div className='App'>
            <header className='App-header'>
                {!provider && (
                    <Button
                        onClick={(): void => {
                            dispatch(connectWeb3Provider());
                        }}
                        label='open web3 modal'
                    />
                )}
                <Button
                    onClick={(): void => {
                        dispatch(getWeb3UserInfoInConsole());
                    }}
                    label='get user info in console'
                />
                {provider && (
                    <>
                        <h2>{message}</h2>
                        <div>
                            <input
                                value={inputMessage}
                                onChange={(e): void => setMessage(e.target.value)}
                                placeholder='enter new message'
                            />
                            <Button
                                onClick={(): void => {
                                    if (inputMessage) {
                                        dispatch(changeMessage(inputMessage));
                                        setMessage('');
                                    }
                                }}
                                label='Send'
                            />
                        </div>
                        <table style={{ width: '80%' }}>
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

export default Message;
