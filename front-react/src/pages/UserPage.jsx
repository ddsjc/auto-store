import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Header, Footer} from "../components/index";

const UserPage = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allapplications');
        setAdvertisements(response.data);
      } catch (error) {
        console.log('Ошибка при получении объявлений:', error);
      }
    };

    fetchAdvertisements();
  }, []);

  const handleAdvertisementClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/oneapplication?id=${id}`);
      setSelectedAdvertisement(response.data);
    } catch (error) {
      console.log('Ошибка при получении информации об объявлении:', error);
    }
  };

  const handleBackButtonClick = () => {
    setSelectedAdvertisement(null);
  };

  const handleSelectButtonClick = async (id) => {
    try {
      await axios.post(`http://localhost:8080/submitapplication?id=${id}`);
      alert('Заявка выбрана');
    } catch (error) {
      console.log('Ошибка при выборе заявки:', error);
    }
  };

  const AdvertisementListItem = ({ advertisement }) => (
    <li onClick={() => handleAdvertisementClick(advertisement.id)}>
      {advertisement.firstName}
    </li>
  );

  return (
    <div>
      <div className="container">
        <Header/>
        <div className="_form _form-add-announcement">
            {selectedAdvertisement ? (
              <div>
                <button onClick={handleBackButtonClick}>Назад</button>
                <h2>Информация об объявлении</h2>
                <p>Имя: {selectedAdvertisement.firstName}</p>
                <p>Название организации: {selectedAdvertisement.organizationName}</p>
                <p>
                  Адрес:{' '}
                  {selectedAdvertisement.addresses.map((address) => (
                    <span key={address.id}>
                      {address.subjectName}, {address.cityName}, {address.streetName}, {address.houseNumber}
                    </span>
                  ))}
                </p>
                <p>
                  Дополнительные услуги:
                  {selectedAdvertisement.serviceDopList.map((service) => (
                    <div key={service.id}>
                      <p>Название: {service.name}</p>
                      <p>Код: {service.code}</p>
                      <p>Цена: {service.price}</p>
                      <p>Длительность: {service.duration}</p>
                      <p>Дополнительная информация: {service.addInfo}</p>
                    </div>
                  ))}
                </p>
                <button onClick={() => handleSelectButtonClick(selectedAdvertisement.id)}>
                  Выбрать
                </button>
              </div>
            ) : (
                <div>
                  <div className="logo-container">
                    <img src="/images/footer-logo-icon.svg" alt="logo icon" width="80" height="80"/>
                    <h3 className="announcement__logo-title">All inclusive car service</h3>
                  </div>
                  <h2 className="announcement__title">Объявления</h2>
                  <ul>
                    {advertisements.map((advertisement) => (
                        <AdvertisementListItem key={advertisement.id} advertisement={advertisement} />
                    ))}
                  </ul>
                </div>
            )}
            <button className="_form__sub-btn" onClick={() => navigate('/createAdvertisement')}>Создать объявление</button>
          </div>
        <section className="all-service-container">
          <h3 className="all-service-container__title">Мы оказываем следующие услуги:</h3>
          <ul className="all-service-container__list">
            <li className="all-service-container__list__item">
              <div className="all-service-container__list__item__img-box">
                <img src="images/all-service-list-img-1.jpg" alt="" className="all-service-container__list__item__img"/>
              </div>
              <h5 className="all-service-container__list__description">
                Детейлинг автомобиля
              </h5>
            </li>
            <li className="all-service-container__list__item">
              <img src="images/all-service-list-img-2.jpg" alt="" className="all-service-container__list__item__img"/>
              <h5 className="all-service-container__list__description">
                Ремонт автомобиля
              </h5>
            </li>
            <li className="all-service-container__list__item">
              <img src="images/all-service-list-img-3.jpg" alt="" className="all-service-container__list__item__img"/>
              <h5 className="all-service-container__list__description">
                Тюнинг автомобиля
              </h5>
            </li>
            <li className="all-service-container__list__item">
              <img src="images/all-service-list-img-4.jpg" alt="" className="all-service-container__list__item__img"/>
              <h5 className="all-service-container__list__description">
                Шиномонтаж
              </h5>
            </li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default UserPage;
