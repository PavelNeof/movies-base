import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {

        const response = await MovieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=movie`
        );
        return response.data;
    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {

        const response = await MovieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
        );
        return response.data;
    })

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieDrShowDetail',
    async (id) => {
        const response = await MovieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
    })


const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state)=>{
            state.selectMovieOrShow = {};
        }
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
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload})=>{
            console.log('Fetch Successfully!');
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const {addMovies, removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;