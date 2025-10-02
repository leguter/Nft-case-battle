
import './App.css'
// import CaseList from './components/CaseList/CaseList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import CasePage from './pages/CasePage/CasePage';
// import LoginPage from './pages/LoginPage/LoginPage';
import Loader from './components/Loader/Loader';



import  { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal/LoginModal';
import AuthCallbackPage from './pages/AuthCallbackPage/AuthCallbackPage';


const BACKEND_URL = 'https://back-for-project-1.onrender.com';

// function App() {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const token = localStorage.getItem('accessToken');
//       if (token) {
//         try {
//           const response = await fetch(`${BACKEND_URL}/api/profile`, {
//             headers: { 'Authorization': `Bearer ${token}` }
//           });
//           if (response.ok) {
//             const data = await response.json();
//             console.log(data)
//             setUser(data.user);
//           } else {
//             localStorage.removeItem('accessToken');
//             setUser(null);
//           }
//         } catch (error) {
//           console.error('Помилка перевірки токену:', error);
//           setUser(null);
//         }
//       }
//       setIsLoading(false);
//     };
//     checkAuthStatus();
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <Router>
//       <div className="app-container">
//         <Header user={user} />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route 
//               path="/case/:caseId" 
//               element={<CasePage user={user} setUser={setUser} />} 
//             />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;





function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const response = await fetch(`${BACKEND_URL}/api/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
          } else {
            localStorage.removeItem('accessToken');
          }
        } catch (error) {
          console.error('Помилка перевірки токену:', error);
        }
      }
      setIsLoading(false);
    };
    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="app-container">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Додаємо новий маршрут для обробки відповіді від Telegram */}
            <Route path="/auth/telegram/callback" element={<AuthCallbackPage />} />
            <Route 
              path="/case/:caseId" 
              element={<CasePage user={user} setUser={setUser} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

