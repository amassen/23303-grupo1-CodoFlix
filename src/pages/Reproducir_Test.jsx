// import { HeadlineH2 } from '../components/atom/Headlineh2'

import React,{useState} from 'react'

import ReactPlayer from 'react-player/youtube'
// npm install react-player si llega a fallar o faltar en el package.json al iniciar

import '../styles/Reproducir.css'
/* 
********* REPRODUCTOR DINAMICO PARA LA API DE  
*/
export const Reproducir = () => {


  // SOLO TESTING
  //********************************************
  //inicializaciones basicas
  const [user,setUser]= useState(
    {
      // usuario: {nombreUsuario}
    }
    )
    
    //inicializaciones basicas
    //************************ */
    // SOLO TESTING


  return (

    <div>
      <HeadlineH2 headlineText="Reproducir" />
      
      <div className="reproductor">
        
        <div className="leftData">
          {/* //inicio leftData */}
          {/* <p>algo</p> */}

          <div className="rePro">
            {/* <p>aca tendria que aparecer el reproductor dinamico por la url</p> */}
            <div className='player-wrapper'>
              {/* INICIO_repro */}
              {/* LA URL DEBERIA DE SER DINAMICA ACA ESTA HARDCODEADA */}
              <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=Dg0KNwCXdd0' width='100%' height='100%' />
              {/* FIN_repro */}
            </div>
            <div className="sinopsis">
              <p>Sinopsis</p>
              {/* LA SINOPSIS DEBE SER GENERADA POR LA APPI AL IGUAL QUE LOS OTROS DATOS */}
              <span>Aca la sinopsis generada por la api de peliculas de forma automatica</span>
              <hr />
            </div>
            <div className="comentarios">
              {/* LOS COMENTARIOS SON LOS QUE SE TRAEN DE LA BASE DE DATOS */}
              <p>Comentario1</p>
              <p>Comentario2</p>
              <p>ComentarioX</p>
            </div>
          </div>
          {/* //fin leftData */}
        </div>

        <div className="rightData">
          {/* INICIO RIGHTDATA */}
          <div className="info">
            <p className='titulo'>Titulo</p>
            <br />
            <p className="subtitulo">Subtitulo</p>
            <hr />
          </div>
          <div className="infoalterna">
            <p>Genero</p><span>Genero traido desde la api</span><hr />
            <p>Duracion</p><span>Duracion traido desde la api</span><hr />
            <p>Puntuacion</p><span>Puntuacion traido desde la api</span><hr />
            <p>Directores</p><span>Directores traido desde la api</span><hr />
            <p>Escritores</p><span>Escritores traido desde la api</span><hr />
            <p>Elenco</p><span className='espacioBottom'>Elenco</span>
            <br />
            <br />
            <div className="divBtnResenia">
              
              <a href="#resenia" className='btnResena'>RESEÑA</a>
            </div>
          </div>
          {/* FIN RIGHTDATA */}
        </div> 
     </div>
       

    </div>
  )
}
