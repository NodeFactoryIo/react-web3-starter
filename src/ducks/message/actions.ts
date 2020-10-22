import { createAction } from '@reduxjs/toolkit';
import { messageSlice } from './slice';

export const { setMessage, setLogMessages, addLogMessage, deleteLogMessage } = messageSlice.actions;

export const changeMessage = createAction<string>('message/change_message');

export const fetchMessage = createAction('message/get_message');
