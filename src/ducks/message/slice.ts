import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LogMessage {
    sender: string;
    setter: 'admin' | 'paid' | 'free';
    message: string;
}

interface Message {
    message: string;
    log: LogMessage[];
}

const initialState: Message = { message: '', log: [] };

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        setLogMessages: (state, action: PayloadAction<LogMessage[]>) => {
            state.log = action.payload;
        },
        addLogMessage: (state, action: PayloadAction<LogMessage>) => {
            state.log.push(action.payload);
        },
        deleteLogMessage: (state, action: PayloadAction<number>) => {
            if (state.log[action.payload]) {
                state.log.splice(action.payload, 1);
            }
        },
    },
});

export default messageSlice;
