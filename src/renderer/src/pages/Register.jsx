import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import API from '../utils/api';
import { useState } from 'react';
import Header from '../components/Header';

function Register() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        try {
            // Chamada para a API de registro
            const response = await API.post('register', data);
            console.log('Usuário registrado com sucesso:', response.data);
            // Limpar os campos do formulário após o registro
            setError(null);
            // Redirecionar para a página de login após o registro bem-sucedido
            window.location.href = '/';
        } catch (error) {
            // Se houver algum erro na requisição, exibe o erro para o usuário
            setError(error.response.data.message);
        }
    };

    return (
        <div>
             <Header isLoggedIn={false}></Header>
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register('username')} label="Nome de usuário" type="text" />
                <TextField {...register('email')} label="E-mail" type="email" />
                <TextField {...register('password')} label="Senha" type="password" />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <Button type="submit">Registrar</Button>
            </form>
        </div>
    );
}

export default Register;
