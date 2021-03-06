import React, { FC, useState } from 'react';
import { connectWeb3Provider, getWeb3UserInfoInConsole } from '../../ducks/ethers/web3/actions';
import { changeMessage } from '../../ducks/message/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage, getMessageLog } from '../../ducks/message/selectors';
import { Button } from '../../components/Button';
import { RestrictedView } from '../../containers/views/RestrictedView';

export const MessagePage: FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessage);
  const log = useSelector(getMessageLog);

  const [inputMessage, setMessage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedView roles={['user']} blockedRoles={['web3']}>
          <Button
            onClick={(): void => {
              dispatch(connectWeb3Provider());
            }}
            color="primary"
          >
            open web3 modal
          </Button>
        </RestrictedView>
        <RestrictedView roles={['web3']}>
          <Button
            onClick={(): void => {
              dispatch(getWeb3UserInfoInConsole());
            }}
            color="primary"
          >
            get user info in console
          </Button>
          <h2>{message}</h2>
          <div>
            <input
              value={inputMessage}
              onChange={(e): void => setMessage(e.target.value)}
              placeholder="enter new message"
            />
            <Button
              onClick={(): void => {
                if (inputMessage) {
                  dispatch(changeMessage(inputMessage));
                  setMessage('');
                }
              }}
              color="primary"
            >
              Send
            </Button>
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
        </RestrictedView>
      </header>
    </div>
  );
};
