import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [organizations, setOrganizations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Загрузка данных неподтвержденных организаций
    axios.get('http://localhost:8080/admin/checkorganization')
      .then(response => {
        setOrganizations(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleApprove = (id) => {
    // Обработчик для подтверждения организации
    axios.patch(`http://localhost:8080/admin/approve?login=${id}`)
      .then(response => {
        // Обновление списка организаций после подтверждения
        const updatedOrganizations = organizations.map(org => {
          if (org.id === id) {
            return { ...org, approve: true };
          }
          return org;
        });
        setOrganizations(updatedOrganizations);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    // Обработчик для выхода
    // Дополнительные действия перед выходом (например, очистка локального хранилища)
    localStorage.removeItem('token');
    // Перенаправление на страницу авторизации (здесь используем useNavigate)
    navigate('/login');
  };

  return (
    <div>
      <h2>Административная страница</h2>
      <button onClick={handleLogout}>Выход</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Наименование организации</th>
            <th>Подтверждение</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map(org => (
            <tr key={org.id}>
              <td>{org.id}</td>
              <td>"{org.shortName}"</td>           
              <td>{org.approve ? 'Подтверждено' : 'Не подтверждено'}</td>
              <td>
                {org.approve ? (
                  'Подтверждено'
                ) : (
                  <button onClick={() => handleApprove(org.id)}>Подтвердить</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
