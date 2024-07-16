import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header, Footer } from '../components/index';

const OrganizationRegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [organizationFullName, setOrganizationFullName] = useState('');
  const [organizationShortName, setOrganizationShortName] = useState('');
  const [inn, setInn] = useState('');
  const [kpp, setKpp] = useState('');
  const [ogrn, setOgrn] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [cityName, setCityName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [addInfo, setAddInfo] = useState('');
  const [addressTypeName, setAddressTypeName] = useState('');
  const [addressTypeAddInfo, setAddressTypeAddInfo] = useState('');

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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOrganizationFullNameChange = (e) => {
    setOrganizationFullName(e.target.value);
  };

  const handleOrganizationShortNameChange = (e) => {
    setOrganizationShortName(e.target.value);
  };

  const handleInnChange = (e) => {
    setInn(e.target.value);
  };

  const handleKppChange = (e) => {
    setKpp(e.target.value);
  };

  const handleOgrnChange = (e) => {
    setOgrn(e.target.value);
  };

  const handleSubjectNameChange = (e) => {
    setSubjectName(e.target.value);
  };

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  const handleStreetNameChange = (e) => {
    setStreetName(e.target.value);
  };

  const handleHouseNumberChange = (e) => {
    setHouseNumber(e.target.value);
  };

  const handleAddInfoChange = (e) => {
    setAddInfo(e.target.value);
  };

  const handleAddressTypeNameChange = (e) => {
    setAddressTypeName(e.target.value);
  };

  const handleAddressTypeAddInfoChange = (e) => {
    setAddressTypeAddInfo(e.target.value);
  };

  const handleOrganizationRegistration = (e) => {
    e.preventDefault();
    const registrationData = {
      firstName,
      lastName,
      patronymic,
      phoneNumber,
      username,
      password,
      email,
      role: 'ROLE_ORGANIZATION',
      organizationFullName,
      organizationShortName,
      inn,
      kpp,
      ogrn,
      addressDto: {
        subjectName,
        cityName,
        streetName,
        houseNumber,
        addInfo,
        addressTypeDto: {
          addressTypeName,
          addInfo: addressTypeAddInfo,
        },
      },
    };

    axios
      .post('http://localhost:8080/auth/registration', registrationData)
      .then((response) => {
        console.log(response.data);
        // Дополнительные действия после успешной регистрации
        const token = response.data.token; // Получение JWT токена из ответа
        localStorage.setItem('token', token); // Сохранение токена в локальном хранилище
        navigate('/login'); // Перенаправление на страницу авторизации
      })
      .catch((error) => {
        console.error(error);
        // Обработка ошибок регистрации
      });
  };

  return (
    <section className="org-registration">
      <div className="container">
        <Header/>
        <h1 className="login-page__title">Страница регистрации для организации</h1>
        <form className="org-registration-form _form" onSubmit={handleOrganizationRegistration}>
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
            <label className="_form__label" htmlFor="organizationFullName">Полное наименование организации:</label>
            <input
                type="text"
                id="organizationFullName"
                value={organizationFullName}
                onChange={handleOrganizationFullNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="organizationShortName">Сокращенное наименование организации:</label>
            <input
                type="text"
                id="organizationShortName"
                value={organizationShortName}
                onChange={handleOrganizationShortNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="inn">ИНН:</label>
            <input
                type="text"
                id="inn"
                value={inn}
                onChange={handleInnChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="kpp">КПП:</label>
            <input
                type="text"
                id="kpp"
                value={kpp}
                onChange={handleKppChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="ogrn">ОГРН:</label>
            <input
                type="text"
                id="ogrn"
                value={ogrn}
                onChange={handleOgrnChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="subjectName">Название субъекта:</label>
            <input
                type="text"
                id="subjectName"
                value={subjectName}
                onChange={handleSubjectNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="cityName">Название города:</label>
            <input
                type="text"
                id="cityName"
                value={cityName}
                onChange={handleCityNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="streetName">Название улицы:</label>
            <input
                type="text"
                id="streetName"
                value={streetName}
                onChange={handleStreetNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="houseNumber">Номер дома:</label>
            <input
                type="text"
                id="houseNumber"
                value={houseNumber}
                onChange={handleHouseNumberChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="addInfo">Дополнительная информация:</label>
            <input
                type="text"
                id="addInfo"
                value={addInfo}
                onChange={handleAddInfoChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="addressTypeName">Название типа адреса:</label>
            <input
                type="text"
                id="addressTypeName"
                value={addressTypeName}
                onChange={handleAddressTypeNameChange}
                required
            />
          </div>
          <div className="form-group">
            <label className="_form__label" htmlFor="addressTypeAddInfo">Дополнительная информация о типе адреса:</label>
            <input
                type="text"
                id="addressTypeAddInfo"
                value={addressTypeAddInfo}
                onChange={handleAddressTypeAddInfoChange}
                required
            />
          </div>
          <button className="_form__sub-btn" type="submit">Зарегистрироваться как организация</button>
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default OrganizationRegistrationPage;
