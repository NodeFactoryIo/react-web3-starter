import { RootState } from '../store';

export const getMessage = (state: RootState) => state.message.message;

export const getMessageLog = (state: RootState) => state.message.log;
