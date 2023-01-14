import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import "./PageNotFound.scss"

const PageNotFound = () => {

    let [count, setCount] = useState(5)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count = count - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    if (count === 0) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={'container-box'}>
            <h2 className={'text'}>Oops, page not found.
                You will return to the main page in
                <span>{` ${count} `}</span>
                seconds
            </h2>
        </div>
    )
}

export default PageNotFound;