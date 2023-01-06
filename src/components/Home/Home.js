import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {useDispatch} from "react-redux";
import {addMovies} from "../../features/movies/movieSlice";

const Home = () => {

    const movieText = "Harry"
    const dispatch = useDispatch()

    useEffect(()=>{

        const fetchMovies = async () =>{
            const response = await MovieApi.get(
                `?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((error)=> {
                    console.log("error :", error)
                })
            dispatch(addMovies(response.data))
        }

        fetchMovies()
    },[])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home;