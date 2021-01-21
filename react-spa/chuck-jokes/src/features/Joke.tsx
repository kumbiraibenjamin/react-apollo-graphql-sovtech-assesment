
import React from "react";

interface IJoke {
    data: JokeQL,
    loading: boolean,
    error: any
}

interface JokeQL {
    icon_url: string,
    id: string,
    url: string,
    value: string,
}

const jokeStyle: React.CSSProperties = {

    padding: '15px 32px',
    display: 'inline-block',
    fontSize: '28px',
    marginTop: '50px',

};

const jokeImageStyle: React.CSSProperties = {
    marginRight: '5px',
};

const Joke = ({ data, loading, error }: IJoke) => {
    if (loading) return  <p>Loading...</p>;
    if (error)  return <p>Error! {error.message}</p>
    return (
            <p style={jokeStyle}>
                <span style={jokeImageStyle}>
                    <img src={data.icon_url} alt="" />
                </span>
                "{data.value}"
            </p>
    )
}

export { Joke }