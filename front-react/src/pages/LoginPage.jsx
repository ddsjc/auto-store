import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import { Header, Footer } from "../components/index";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOrganizationRegistration = () => {
    navigate('/register/organization');
  };

  const handleUserRegistration = () => {
    navigate('/register/user');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        const jwt = response.data.token;

        // Сохраняем полученную куку
        //const cookieHeader = response.headers['set-cookie'];
        //const cookies = parseCookies(cookieHeader);
        //const token = cookies.token;
        Cookies.set('token', jwt, {secure: true, sameSite: 'none'});
      
        

        // Добавляем токен в заголовок запроса
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        // Проверяем роль пользователя и выполняем необходимые действия
        if (data.role.includes('ROLE_ADMIN')) {
          navigate('/admin');
        } 
        else if (data.role.includes('ROLE_ORGANIZATION')) {
          navigate('/admin');
        }
        else if (data.role.includes('ROLE_USER')) {
          navigate('/user');
        }
        else {
          navigate('/login');
        }
      } else {
        console.log('Ошибка авторизации');
      }
    } catch (error) {
      console.log('Ошибка запроса авторизации:', error);
    }
  };

  // const parseCookies = (cookieHeader) => {
  //   const cookies = {};
  //   if (cookieHeader) {
  //     cookieHeader.split(';').forEach((cookie) => {
  //       const [name, value] = cookie.split('=');
  //       cookies[name.trim()] = value;
  //     });
  //   }
  //   return cookies;
  // };

  return (
    <section className="login-page-main-content">
      <div className="container">
        <Header/>
        <h1 className="login-page__title">Страница авторизации</h1>

        <form className="login-form _form" onSubmit={handleSubmit}>
          <div className="logo-container">
            <img src="images/logo-icon.svg" alt="logo icon" width="80" height="80"/>
            <h3>All inclusive car service</h3>
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="username">Имя пользователя:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="password">Пароль:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
          </div>
          <button className="_form__sub-btn" type="submit">Войти</button>
        </form>

        <div className="registration-links">
          <h3 className="login-page__reg-title">Ещё нет аккаунта?</h3>
          <h4 className="login-page__reg-subtitle">Зарегистрируйтесь как организация или пользователь:</h4>
          <div className="reg-button-container">
            <button className="reg-button-container__btn" onClick={handleOrganizationRegistration}>
              <img className="reg-button-container__btn__img" src="images/organization.png" alt="Организация" />
            </button>
            <button className="reg-button-container__btn" onClick={handleUserRegistration}>
              <img className="reg-button-container__btn__img" src="images/user.png" alt="Пользователь" />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default LoginPage;
