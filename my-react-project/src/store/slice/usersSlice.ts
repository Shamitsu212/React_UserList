import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {type user} from '../../data/users'

interface UsersState {
    users: user[]
}

const initialState: UsersState = {
  users: [], 
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<user>) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
    }
})

export const {addUser, removeUser} = usersSlice.actions;
export default usersSlice.reducer