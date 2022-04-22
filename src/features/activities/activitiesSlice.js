import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// const ACTIVITIES_URL = `${process.env.REACT_APP_ACTIVITY_ROUTE}`
const ACTIVITIES_URL = "https://ongapi.alkemy.org/api/activities"

const initialState = {
    activities: [],
    status: 'idle',
    error: null,
}

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    try {
        const response = await axios.get(ACTIVITIES_URL)
        return response.data
    } catch (error) {
        return error.message
    }
})
export const postActivities = createAsyncThunk('activities/postActivities', async (initialData) => {
    try {
        const response = await axios.post(ACTIVITIES_URL, initialData)
        console.log(response.data)
        return response.data
    } catch (error) {
        return error.message
    }
})
export const updateActivities = createAsyncThunk('activities/updateActivities', async (initialData) => {
    try {
        const response = await axios.put(`https://ongapi.alkemy.org/api/activities/${initialData.id}`, initialData)
        console.log(response.data)
        return response.data
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
        .addCase(postActivities.fulfilled, (state, action) => {
            console.log(action.payload)            
            state.activities.push(action.payload)
            console.log(state.activities)
        })
        .addCase(updateActivities.fulfilled, (state, action) => {
            console.log(action.payload)            
            state.activities.push(action.payload)
            console.log(state.activities)
        })
    }
})

export const selectActivities = state => state.activities.activities
export const getActivitiesStatus = state => state.activities.status
export const getActivitiesError = state => state.activities.error

export default activitiesSlice.reducer

// const dispatch = useDispatch();
//   const activities = useSelector(selectActivities);
//   const activitiesStatus = useSelector(getActivitiesStatus);
//   const activitiesError = useSelector(getActivitiesError);
//   console.log(activities.data);

//   useEffect(() => {

//     activitiesStatus === "idle" && dispatch(fetchActivities());
//     activitiesStatus === "pending" && setLoading(true);
//     activitiesStatus === "succeeded" && setLoading(false);
    
//   }, [activitiesStatus, dispatch]);