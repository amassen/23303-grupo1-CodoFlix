import React from 'react'
import { HeadlineH2 } from '../components/atom/HeadlineH2'
import SearchComponent from '../components/template/Home/SearchComponent/SearchComponent';
import ShowDiscover from '../components/template/Home/Shows/ShowDiscover';
import ShowPopular from '../components/template/Home/Shows/ShowPopular';

export const Home = () => {
  return (
    
      <>
        <HeadlineH2 headlineText="Home" />
        <SearchComponent />  
        <h3 className='m-2 p-2'>Descubri</h3>
        <ShowDiscover />
        <h3 className='m-2 p-2'>Lo mas popular</h3>  
        <ShowPopular />  
      
    </>
  )
}
