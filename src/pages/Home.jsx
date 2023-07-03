import React from 'react'
import { HeadlineH2 } from '../components/atom/Headlineh2'
import SearchComponent from '../components/template/Home/SearchComponent';
import ShowDiscover from '../components/template/Home/ShowDiscover';
import ShowPopular from '../components/template/Home/ShowPopular';

export const Home = () => {
  return (
    <div>
      <h2>
        <HeadlineH2 headlineText="Home" />{' '}
        <SearchComponent />  
        <h3>Descubri</h3>
        <ShowDiscover />
        <h3>Lo mas popular</h3>  
        <ShowPopular />  
      </h2>
    </div>
  )
}
