import './App.scss';
import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path={'/'} exact element={<Home/>}/>
                        <Route path={'/movie/:imdbID'} element={<MovieDetail/>}/>
                        <Route path={'*'} element={<PageNotFound/>}/>
                        <Route path='/movies-base/' element={<Navigate to={'/'}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
