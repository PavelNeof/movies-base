import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {useDispatch} from "react-redux";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieText = "Harry";
        const response = await MovieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        return response.data;
    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async () => {
        const seriesText = "Friends";
        const response = await MovieApi.get(
            `?apiKey=${APIKey}&s=${seriesText}&type=series`
        );
        return response.data;
    })

const initialState = {
    movies: {},
    shows: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: ()=>{
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log('Fetch Successfully!');
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log('Rejected!');
        },
        [fetchAsyncShows.fulfilled]: (state, {payload})=>{
            console.log('Fetch Successfully!');
            return {...state, shows: payload}
        },
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer;