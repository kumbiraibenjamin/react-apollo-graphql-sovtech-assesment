import * as React from 'react';
import { Categories } from '../features/Categories'

const styles: React.CSSProperties = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Home = () => {
  
  return (
    <main style={styles}>
      <h1>Chuck Norris Jokes Generator</h1>
      <img src="./logo192.png" height="200" alt="Chuck jokes" />
      <div>
        <h3>Select a Category</h3>
        <Categories />
      </div>
    </main>
    )
}

export { Home }