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
                <Header></Header>
                <Routes>
                    <Route path={'/'} exact element={<Home />}/>
                    <Route path={'/movie/:imdbId'} element={<MovieDetail/>}/>

                    <Route path={'*'} element={<PageNotFound/>} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
