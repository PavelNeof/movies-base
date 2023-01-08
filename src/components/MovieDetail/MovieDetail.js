import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow} from "../../features/movies/movieSlice";

const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)


    useEffect(()=>{
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    },[dispatch])

    console.log(data)

    return (
        <div>
            MovieDetail
        </div>
    )
}

export default MovieDetail;