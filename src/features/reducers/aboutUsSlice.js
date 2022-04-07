import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Get } from '../../Services/publicApiService';

const initialState = {
	data: {},
	loading: 'idle',
	error: null
}

export const getDataAsync = createAsyncThunk(
	'aboutUs/getData',
	async (payload, thunkAPI) => {
		try {
			const resp = await Get('organization')
			return resp
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
      return rejectWithValue('error fetching data');

		
		}
	}
); 


export const aboutUsSlice = createSlice({
	name: 'aboutUs',
	initialState: initialState,
	reducers: {
	},
	extraReducers: {
		[getDataAsync.pending]: (state, action) => {
			if(state.loading === 'idle') {
				state.loading = 'pending'
			}
			}	,
		[getDataAsync.fulfilled]: (state, action) => {
		if(state.loading === 'pending'){
			state.loading = 'idle';
			state.data = action.payload
		}
		},
		[getDataAsync.rejected]: (state, action) => {
		 if(state.loading === 'pending'){
			 state.loading = 'idle';
			 state.error = action.payload
		 }
		},

	},
});
 


export default aboutUsSlice.reducer;