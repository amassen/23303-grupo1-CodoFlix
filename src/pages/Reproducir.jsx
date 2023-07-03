import React from 'react'
import { HeadlineH2 } from '../components/atom/Headlineh2'
import Reproductor from '../components/Reproducir/Reproductor'
import CardDataMovie from '../components/Reproducir/CardDataMovie'

export const Reproducir = () => {
  return (
    <div>
     <HeadlineH2 headlineText="Reproducir" /> 
     
     
      <Reproductor />  
      <CardDataMovie/>
     

      
    </div>
  )
}
