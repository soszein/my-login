import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import WelcomePage from "./Pages/WelcomePage.jsx";
import LoginForm from './LoginForm/LoginForm';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
