import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'; // Corrigido o import de axios

import { useNavigate } from 'react-router-dom'; // Corrigido o nome do hook de navegação
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import API from '../utils/api';

const loginValidator = yup
  .object()
  .shape({
    email: yup.string().email('Campo deve ser um e-mail').required('E-mail obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
  });

function Login() {
const [token, setToken] =  useState(null) 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginValidator),
  });

  const navigate = useNavigate(); // Corrigido o nome do hook de navegação

 
 
  const onSubmit = async (data) => {
    try {
      const response = await API.post('login', data); // Corrigido o URL da API
      localStorage.setItem('token', response.data.token);
      navigate('/authenticated');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[])

  if (token){
    navigate('/authenticated')
  }
  
  return (<>
    <Header isLoggedIn={false}></Header>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label="E-mail" type="email" />
      {errors.email && <span>{errors.email.message}</span>}
      <TextField {...register('password')} label="Senha" type="password" />
      {errors.password && <span>{errors.password.message}</span>}
      <Button type="submit">Entrar</Button>
    </form>
  </>

  );
}

export default Login;
