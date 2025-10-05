
import './App.css'
// import CaseList from './components/CaseList/CaseList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import CasePage from './pages/CasePage/CasePage';
// import LoginPage from './pages/LoginPage/LoginPage';
import Loader from './components/Loader/Loader';



import  { useState, useEffect } from 'react';
// import LoginModal from './components/LoginModal/LoginModal';
// import AuthCallbackPage from './pages/AuthCallbackPage/AuthCallbackPage';


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
//             setUser(data.user);
//           } else {
//             localStorage.removeItem('accessToken');
//           }
//         } catch (error) {
//           console.error('Помилка перевірки токену:', error);
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
//             {/* Додаємо новий маршрут для обробки відповіді від Telegram */}
//             <Route path="/auth/telegram/callback" element={<AuthCallbackPage />} />
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

// ________________________________________________________________________________________
// _________________________________________________________________________________________

// function App() {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);

// useEffect(() => {
//   const checkAuthStatus = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');

//       // --- 1. Перевіряємо JWT ---
//       if (token) {
//         const response = await fetch(`${BACKEND_URL}/api/profile`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUser(data.user);
//           return; // ✅ якщо вже є токен, далі не йдемо
//         } else {
//           localStorage.removeItem('accessToken');
//           setUser(null);
//         }
//       }

//       // --- 2. Telegram Mini App ---
//       if (window.Telegram?.WebApp) {
//         const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
//         if (tgUser) {
//           const res = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(tgUser),
//           });

//           if (res.ok) {
//             const data = await res.json();
//             localStorage.setItem("accessToken", data.accessToken);
//             setUser(data.user);
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Помилка перевірки токену:", error);
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   checkAuthStatus();
// }, []);

//   if (isLoading) return <Loader />;

//   return (
//     <Router>
//       <div className="app-container">
//         <Header user={user} onLoginClick={() => setShowLogin(true)} />
//         <main>
//           <Routes>
//             {/* Головна сторінка */}
//             <Route path="/" element={<HomePage user={user} />} />

//             {/* Telegram OAuth callback */}
//             <Route path="/login-success" element={<AuthCallbackPage setUser={setUser} />} />

//             {/* Сторінка з кейсом */}
//             <Route
//               path="/case/:caseId"
//               element={<CasePage user={user} setUser={setUser} />}
//             />
//           </Routes>
//         </main>

//         {/* Модальне вікно авторизації через Telegram */}
//         {showLogin && (
//           <LoginModal onLogin={(user) => setUser(user)} />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");

//         // --- 1. Перевіряємо JWT ---
//         if (token) {
//           const response = await fetch(`${BACKEND_URL}/api/profile`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setUser(data.user);
//             return; // ✅ якщо токен валідний, зупиняємось
//           } else {
//             localStorage.removeItem("accessToken");
//             setUser(null);
//           }
//         }

//         // --- 2. Telegram Mini App ---
//         if (window.Telegram?.WebApp) {
//           const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
//           if (tgUser) {
//             const res = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(tgUser),
//             });

//             if (res.ok) {
//               const data = await res.json();
//               localStorage.setItem("accessToken", data.accessToken);
//               setUser(data.user);
//             }
//           }
//         }
//       } catch (error) {
//         console.error("Помилка перевірки токену:", error);
//         setUser(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   if (isLoading) return <Loader />;

//   return (
//     <Router>
//       <div className="app-container">
//         <Header user={user} onLoginClick={() => setShowLogin(true)} />

//         <main>
//           <Routes>
//             {/* Головна */}
//             <Route path="/" element={<HomePage user={user} />} />

//             {/* Callback після Telegram OAuth */}
//             <Route path="/login-success" element={<AuthCallbackPage setUser={setUser} />} />

//             {/* Сторінка кейсу */}
//             <Route path="/case/:caseId" element={<CasePage user={user} setUser={setUser} />} />
//           </Routes>
//         </main>

//         {/* Модалка логіну */}
//       {showLogin && (
//   <LoginModal
//     onLogin={(newUser) => {
//       setUser(newUser);
//       setShowLogin(false);
//     }}
//     onClose={() => setShowLogin(false)}
//   />
// )}
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Переконайтесь, що шляхи до ваших компонентів правильні
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CasePage from './pages/CasePage';
import Loader from './components/Loader';
import './App.css';

const BACKEND_URL = 'https://back-for-project.onrender.com';

// Спеціальний хук для зручної роботи з Telegram Web App
const useTelegram = () => {
    const [tg, setTg] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        script.onload = () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const webApp = window.Telegram.WebApp;
                webApp.ready(); // Повідомляємо Telegram, що додаток готовий
                webApp.expand(); // Розширюємо вікно на весь екран
                setTg(webApp);
            }
        };
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return tg;
};

function App() {
  const tg = useTelegram();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!tg) {
      // Чекаємо, поки об'єкт tg буде ініціалізовано, або показуємо помилку
      const timer = setTimeout(() => {
        if (!window.Telegram?.WebApp?.initData) {
            setError('Цей додаток призначений для використання тільки всередині Telegram.');
            setIsLoading(false);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }

    const authenticateUser = async (initData) => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/auth/webapp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ initData: initData }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          setUser(data.user);
        } else {
          setError('Помилка автентифікації на сервері.');
        }
      } catch (err) {
        setError('Не вдалося зв\'язатися з сервером.');
      } finally {
        setIsLoading(false);
      }
    };
    
    // initData - це безпечний рядок, що містить дані користувача
    if (tg.initData) {
        authenticateUser(tg.initData);
    }
    
  }, [tg]);

  if (isLoading) {
    return <Loader />;
  }
  
  if (error || !user) {
      return (
          <div className="auth-error-container">
              <h1>NFT Case Battle</h1>
              <p>{error || 'Будь ласка, відкрийте додаток через вашого Telegram-бота.'}</p>
          </div>
      );
  }

  return (
    <Router>
      <div className="app-container">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
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



