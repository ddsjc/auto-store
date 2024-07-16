import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header, Footer } from '../components/index';

const UserRegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Хук для управления переходами

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePatronymicChange = (e) => {
    setPatronymic(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserRegistration = (e) => {
    e.preventDefault();
    const registrationData = {
      firstName,
      lastName,
      patronymic,
      phoneNumber,
      email,
      username,
      password,
      role: 'ROLE_USER'
    };

    axios.post('http://localhost:8080/auth/registrationuser', registrationData)
      .then(response => {
        console.log(response.data);
        // Дополнительные действия после успешной регистрации
        const token = response.data.token; // Получение JWT токена из ответа
        localStorage.setItem('token', token); // Сохранение токена в локальном хранилище
        navigate('/login'); // Перенаправление на страницу авторизации
      })
      .catch(error => {
        console.error(error);
        // Обработка ошибок регистрации
      });
  };

  return (
    <section className="user-reg-section">
      <div className="container">
        <Header/>
        <h1 className="login-page__title">Страница регистрации для пользователя</h1>
        <form className="org-registration-form _form" onSubmit={handleUserRegistration}>
          <div className="logo-container">
            <img src="/images/logo-icon.svg" alt="logo icon" width="80" height="80"/>
            <h3>All inclusive car service</h3>
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="firstName">Имя:</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="lastName">Фамилия:</label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="patronymic">Отчество:</label>
            <input
                type="text"
                id="patronymic"
                value={patronymic}
                onChange={handlePatronymicChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="phoneNumber">Номер телефона:</label>
            <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
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
          <button className="_form__sub-btn" type="submit">Зарегистрироваться как пользователь</button>
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default UserRegistrationPage;
