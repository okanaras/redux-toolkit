import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // http istegi yok ise kullanilir
    },
    extraReducers: (builder) => {
        // http isteklerinde kullanilir.
        // tanimi funck istekFonkAdi.fulfilled, (state,fonkReturnDegeri.payload)=>{} anlamini tasir
        // burada birisi eger getAllUsers func cagirirsa eger asagidaki islemler gerceklesir
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    }
});

export const { } = userSlice.actions; // buraya yalnizca reducers func yazilir, http func'lari yazilmaz
export default userSlice.reducer;
