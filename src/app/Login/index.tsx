import { AiFillGoogleCircle } from 'react-icons/ai';
import { FormLoginContainer, LoginContainer, SocialLoginContainer } from './styles';
import { useForm } from 'react-hook-form';

import { useNavigate } from "react-router-dom";

export function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSubmit(data: any) {
    console.log(data);
    if(data.username === 'admin' && data.password === '1234') {
      navigate('/home');
    } else { alert('usuário ou senha inválidos!'); }
    
    reset();
  }

  return (
    <LoginContainer>
      <FormLoginContainer>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            Nome de usuário:
            <input {...register('username')} name="username" type="text" id="username" />
          </label>
          <label htmlFor="password">
            Senha:
            <input {...register('password')} name="password" type="password" id="password" />
          </label>
          <button type="submit">
            Entrar
          </button>
        </form>

        <SocialLoginContainer>
          <span>ou faça login com:</span>
          <i onClick={() => console.log('Login com google')}>
            <AiFillGoogleCircle size={50} />
          </i>
        </SocialLoginContainer>

      </FormLoginContainer>
    </LoginContainer>
  );
}