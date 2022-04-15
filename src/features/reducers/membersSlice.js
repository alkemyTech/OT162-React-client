import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMembers } from "../../Services/membersApiService";

const initialState = {
    member: [],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null
}

export const fetchMembers = createAsyncThunk(
    'members/getMembers',
    async () => {
        const response = await getMembers()
        return response.data.data
    }
)

const membersSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchMembers.fulfilled, (state, action) =>{
            return action.payload
        })
    }
})

export default membersSlice.reducer