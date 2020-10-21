import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LogMessage {
    sender: string;
    setter: 'admin' | 'paid' | 'free';
    message: string;
}

interface MessageState {
    message: string;
    log: LogMessage[];
}

const initialState: MessageState = { message: '', log: [] };

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>): void => {
            state.message = action.payload;
        },
        setLogMessages: (state, action: PayloadAction<LogMessage[]>): void => {
            state.log = action.payload;
        },
        addLogMessage: (state, action: PayloadAction<LogMessage>): void => {
            state.log.push(action.payload);
        },
        deleteLogMessage: (state, action: PayloadAction<number>): void => {
            if (state.log[action.payload]) {
                state.log.splice(action.payload, 1);
            }
        },
    },
});

export default messageSlice;
