import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrganizationRegistrationPage from './pages/OrganizationRegistrationPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/register/organization" element={<OrganizationRegistrationPage />} />
          <Route path="/register/user" element={<UserRegistrationPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
