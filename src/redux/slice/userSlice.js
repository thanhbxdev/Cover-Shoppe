import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import userAPI from "../../api/userAPI";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //Call API
        const dataRes = await userAPI.register(payload)
        //save local
        localStorage.setItem('access_token',dataRes.jwt)
        localStorage.setItem('user',JSON.stringify(dataRes.user))
        //return user data
        return dataRes.user
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {}
    },
    reducers: {
        register(state, actions) {
        },
    },
    extraReducers: {
        [register.fulfilled]: (state,action) => {
            state.current = action.payload
        }
    }
})
const {reducer} = userSlice
export default reducer