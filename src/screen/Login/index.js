import * as S from './styles';
import newLogoCompass from '../../assets/compassLogoNew.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import api from '../../services/api';

export function Login() {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  function handleNavigation(e) {
    e.preventDefault();
    api.get('users.json').then(response => {
      const { data } = response;
      const userData = Object.values(data).find(value => value.firstName === user && value.password === password)
 
      if (userData !== undefined) {
        window.localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('auth', true)
        navigate('/home');
      } else {
        setError(true);
      }
    }).catch(error => {
      setError(true);
    })
 
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Welcome,</S.Title>
          <S.Description>
            To continue browsing safely, log in to the network.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={(e) => handleNavigation(e)}>
          <h2>Login</h2>
          <Input
            variant="user"
            label="user name"
            type="text"
            onChange={({ target }) => setUser(target.value)}
            error={error}
          />
          <Input
            variant="password"
            label="password"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            error={error}
          />
          <S.ErrorMessageContainer>
            <S.ErrorMessage error={error}>
              Wow, invalid username or password. <br /> Please, try again!
            </S.ErrorMessage>
          </S.ErrorMessageContainer>
          <S.FormButtonContainer>
            <Button type="submit" title="Log in" />
          </S.FormButtonContainer>
        </S.Form>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={newLogoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
