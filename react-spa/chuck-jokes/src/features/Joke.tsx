
import React from "react";

interface Joke {
    value: string
    loading: boolean,
    error: any
}

const jokeStyle: React.CSSProperties = {

    padding: '15px 32px',
    display: 'inline-block',
    fontSize: '28px',
    marginTop: '50px',

};

const Joke = ({ value, loading, error }: Joke) => {
    if (loading) return  <p>Loading...</p>;
    if (error)  return <p>Error! {error.message}</p>
    return (
        <p
        style={jokeStyle}
        >
        "{value}"
        </p>

    )
}

export { Joke }