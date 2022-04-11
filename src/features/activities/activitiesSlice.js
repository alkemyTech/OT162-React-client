import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const ACTIVITIES_URL = `${process.env.REACT_APP_API_URL_BASE}${process.env.REACT_APP_ACTIVITY_ROUTE}`

const initialState = {
    activities: [],
    status: 'idle',
    error: null,
}

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    try {
        const response = await axios.get(ACTIVITIES_URL)
        return [...response.data]
    } catch (error) {
        return error.message
    }
})
export const postActivities = createAsyncThunk('activities/postActivities', async () => {
    try {
        const response = await axios.post(ACTIVITIES_URL, initialState.activities)
        console.log(response.data)
        return [...response.data]
    } catch (error) {
        return error.message
    }
})


export const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(fetchActivities.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchActivities.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const loadedActivities = action.payload
            state.activities = loadedActivities
        })
        .addCase(fetchActivities.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectActivities = state => state.activities.activities
export const getActivitiesStatus = state => state.activities.status
export const getActivitiesError = state => state.activities.error

export default activitiesSlice.reducer