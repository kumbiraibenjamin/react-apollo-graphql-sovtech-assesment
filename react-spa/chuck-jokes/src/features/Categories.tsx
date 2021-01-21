
import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks"

import { getCategories, } from "../apollo/Query"

import { Button } from './Button'
import { Joke } from './Joke'

const Categories = () => {
    const { loading, error, data } = useQuery(getCategories);
    const initialJoke = {
        icon_url: "",
        id: "",
        url: "",
        value: ""
    }
    const [joke, setJoke] = useState(initialJoke);
    const [jokeLoading, setLoading] = useState(false);
    const [jokeError, setError] = useState(undefined);

    const handleClick = (query: any) => {
        const {data, loading, error } = query
        setJoke(data.getJoke)
        setLoading(loading)
        setError(error)
    }

    if (loading) return  <p>Loading...</p>;
    if (error)  return <p>Error! {error.message}</p>
         
    return (
        <div>
            {data.categories.map((category: string, index: number) => <Button onCategoryClick={handleClick} key={index} category={category} index={ index }/>)}
            <div>
                <Joke data={joke} loading={jokeLoading} error={ jokeError }/>
            </div>
        </div>
    );
};

export { Categories };

