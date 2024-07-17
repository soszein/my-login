import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';
import Heart from '../assets/Heart_corazón.svg.png';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  
  useEffect(() => {
    if (!localStorage.getItem("Email")) {
      navigate('/login');
    }
  }, [navigate]);

  const HandleLogOut =()=>{
    localStorage.clear()
    setTimeout( ()=>{
      navigate('/login');
    },500)
  }
  return (
    <>
      {userInfo.name && (
        <div className='welcome-page'>
          <h2>Welcome: {userInfo.name} <span><img src={Heart} alt="Heart"/></span> </h2>
          <p>Email: {userInfo.email}</p>
          <div className="Logout"
          onClick={HandleLogOut}
          >
          <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePage;
