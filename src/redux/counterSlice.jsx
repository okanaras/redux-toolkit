import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    value: 25,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState, // burada eger yukardaki const adi farkli ise initialState: verdiginAd seklinde olmali.
    reducers: {
        increment: (state) => { // buradaki state = `initialState`. 
            state.value = state.value + 1 // state.propertyName ile `initialState` propertylerine erisiriz
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
    }
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer