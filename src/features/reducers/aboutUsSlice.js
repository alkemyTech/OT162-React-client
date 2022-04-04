import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Get } from '../../Services/publicApiService';

const initialState = {
	data: {},
	status: 'loading',
	error: null
}

export const getDataAsync = createAsyncThunk(
	'aboutUs/getData',
	async () => {
		try {
			const resp = await Get('organization')
			return resp
		} catch (error) {
			console.log(error)
		
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
			return {...state, 
				status: 'loading'}
		},
		[getDataAsync.fulfilled]: (state, action) => {
			return {...state, 
				data: {...action.payload},
				status: 'succeded'}
		},
		[getDataAsync.rejected]: (state, action) => {
			return {...state,
				status: 'failed'}
		},

	},
});
 


export default aboutUsSlice.reducer;