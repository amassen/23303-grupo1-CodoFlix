import React, { useState } from 'react'
import { HeadlineH2 } from '../components/atom/HeadlineH2'
import { UserAuth } from '../context/AuthContext';

// bootstrap?
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; //NOT USED FOR NOW
import {Link,useNavigate} from 'react-router-dom';


export const Registrarse = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
        await signUp(email,password)
        console.log('Usuario creado con exito')
        navigate('/')
    }
    catch (error){
      console.log('ha fallado con exito')
      alert('fallado con exito')
      }
  }  
  

  return (
    <>
      <HeadlineH2 headlineText="Registrarse" />
      <div className=''>
        {/* <p>Aca seria el registro del usuario...</p> */}
        <div className='bg-dark text-white w-75 mx-auto p-5 '>
        {/* <h2>Registrese</h2> */}
        {/* <Form onSubmit={handleSubmit} className='w-50 m-4 d-flex flex-column mb-3 p-6 mx-auto bg-secondary'> */}
        <Form onSubmit={handleSubmit} className='w-50 m-4 d-flex flex-column mb-3 p-6 mx-auto'>
          <input 
            onChange={(e)=>setEmail(e.target.value)}
            className='my-2' type="email" placeholder='email' autoComplete='email'/>
          <input 
            onChange={(e)=>setPassword(e.target.value)}
          className='my-2' type="password" placeholder='password' autoComplete='current-password'/>
          <br />
          <button className='mt-12 btn btn-primary'>Registrarse</button>
        </Form>
        <br />
        <div>
          <p><input type="checkbox" name="" id="" />Recordar usuario</p>
          <p>
              <span>Ya estas registrado?</span>{' '}
              <Link to='/login'>
                Inicia sesion!
              </Link>
              {' '}
          <span><a href="#">Necesita ayuda</a></span>
          </p>
        
        </div>
        

      </div>
        </div>
        
    </>
  )
}
