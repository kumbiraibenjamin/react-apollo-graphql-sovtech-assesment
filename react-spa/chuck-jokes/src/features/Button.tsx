
import React from "react";
import { useQuery } from "@apollo/react-hooks"


import { getRandomJoke } from "../apollo/Query"

interface Category {
  category: string
  onCategoryClick: Function
  index: number
}

const btnCategory: React.CSSProperties = {
  backgroundColor: '#29ABE2',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '5px',

};

const Button = ({ category, onCategoryClick, index }: Category) => {
  const { loading, error, data, refetch } = useQuery(getRandomJoke, { variables: { category } });

  return (
      <button 
        style={btnCategory}
        key={index}
        onClick={() => {
          refetch()
          console.log('clicked')
          onCategoryClick({data, loading, error})
        }}>
        {category.toUpperCase()}
      </button>

  );
};

export { Button };
