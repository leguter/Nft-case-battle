
// import './App.css'
// // import CaseList from './components/CaseList/CaseList';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import HomePage from './pages/HomePage/HomePage';
// import CasePage from './pages/CasePage/CasePage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import Loader from './components/Loader/Loader';



// import  { useState, useEffect } from 'react';
// // import LoginModal from './components/LoginModal/LoginModal';
// // import AuthCallbackPage from './pages/AuthCallbackPage/AuthCallbackPage';


// const BACKEND_URL = 'https://back-for-project-1.onrender.com';

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

import  { useEffect, useRef, useState } from 'react';

/**
 * Компонент кнопки входу через Telegram.
 * Він динамічно завантажує скрипт віджета Telegram.
 *
 * @param {object} props - Пропси компонента.
 * @param {string} props.botName - Ім'я вашого бота (напр., "samplebot").
 * @param {'large' | 'medium' | 'small'} [props.buttonSize='large'] - Розмір кнопки.
 * @param {boolean} [props.requestAccess=true] - Чи запитувати дозвіл на надсилання повідомлень.
 * @param {(user: object) => void} props.onAuth - Callback-функція, яка викликається з даними користувача після успішної авторизації.
 */
const TelegramLoginButton = ({ botName, buttonSize = 'large', requestAccess = true, onAuth }) => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    // Перевіряємо, чи існує контейнер для скрипта
    if (!scriptContainerRef.current) {
      return;
    }

    // Створюємо унікальне ім'я для callback-функції, щоб уникнути конфліктів,
    // якщо на сторінці буде декілька таких кнопок.
    const callbackName = `onTelegramAuth_${Math.floor(Math.random() * 1000000)}`;

    // Робимо нашу callback-функцію доступною глобально,
    // щоб скрипт Telegram міг її викликати.
    window[callbackName] = (user) => {
      // Передаємо дані користувача у функцію, отриману через пропси.
      onAuth(user);
    };

    // Створюємо елемент скрипта
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;

    // Встановлюємо атрибути для налаштування віджета
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-size', buttonSize);
    // Вказуємо нашу глобальну callback-функцію
    script.setAttribute('data-onauth', callbackName + '(user)');

    if (requestAccess) {
      script.setAttribute('data-request-access', 'write');
    }

    // Додаємо скрипт до контейнера. Віджет з'явиться в цьому місці.
    scriptContainerRef.current.appendChild(script);

    // Функція очищення, яка виконається при демонтуванні компонента
    return () => {
      // Видаляємо скрипт
      if (scriptContainerRef.current) {
        // Очищуємо вміст контейнера
        scriptContainerRef.current.innerHTML = '';
      }
      // Видаляємо глобальну callback-функцію, щоб уникнути витоків пам'яті
      delete window[callbackName];
    };
    // Залежності хука: ефект спрацює знову, якщо зміняться ці пропси.
  }, [botName, buttonSize, requestAccess, onAuth]);

  // Повертаємо div, який буде контейнером для віджета
  return <div ref={scriptContainerRef} />;
};


// --- Приклад використання компонента ---

export default function App() {
  const [user, setUser] = useState(null);

  /**
   * Обробник даних після успішної авторизації.
   * @param {object} telegramUser - Об'єкт з даними користувача від Telegram.
   */
  const handleTelegramAuth = (telegramUser) => {
    console.log("Отримано дані користувача:", telegramUser);
    // Тут ви можете відправити дані на свій бекенд для валідації та створення сесії
    setUser(telegramUser);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>React Telegram Login</h1>
      {!user ? (
        <div>
          <p>Будь ласка, увійдіть за допомогою Telegram:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TelegramLoginButton
              botName="samplebot" // <-- ВАЖЛИВО: замініть на ім'я вашого бота
              onAuth={handleTelegramAuth}
              buttonSize="large"
            />
          </div>
        </div>
      ) : (
        <div>
          <h2>Вітаємо, {user.first_name}!</h2>
          <img src={user.photo_url} alt={`Фото ${user.first_name}`} style={{ borderRadius: '50%', border: '2px solid #0088cc' }} />
          <p>Ваш ID: <code>{user.id}</code></p>
          <p>Ім'я користувача: @{user.username}</p>
          <button onClick={() => setUser(null)} style={{ padding: '10px 20px', cursor: 'pointer', border: 'none', background: '#ccc', borderRadius: '5px' }}>
            Вийти
          </button>
        </div>
      )}
    </div>
  );
}






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



// Спеціальний хук для зручної роботи з Telegram Web App
// const useTelegram = () => {
//     const [tg, setTg] = useState(null);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://telegram.org/js/telegram-web-app.js';
//         script.async = true;
//         script.onload = () => {
//             if (window.Telegram && window.Telegram.WebApp) {
//                 const webApp = window.Telegram.WebApp;
//                 webApp.ready(); // Повідомляємо Telegram, що додаток готовий
//                 webApp.expand(); // Розширюємо вікно на весь екран
//                 setTg(webApp);
//             }
//         };
//         document.body.appendChild(script);
        
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return tg;
// };

// function App() {
//   const tg = useTelegram();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!tg) {
//       // Чекаємо, поки об'єкт tg буде ініціалізовано, або показуємо помилку
//       const timer = setTimeout(() => {
//         if (!window.Telegram?.WebApp?.initData) {
//             setError('Цей додаток призначений для використання тільки всередині Telegram.');
//             setIsLoading(false);
//         }
//       }, 3000);
//       return () => clearTimeout(timer);
//     }

//     const authenticateUser = async (initData) => {
//       try {
//         const response = await fetch(`${BACKEND_URL}/api/auth/webapp`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ initData: initData }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           localStorage.setItem('accessToken', data.accessToken);
//           setUser(data.user);
//         } else {
//           setError('Помилка автентифікації на сервері.');
//         }
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     // initData - це безпечний рядок, що містить дані користувача
//     if (tg.initData) {
//         authenticateUser(tg.initData);
//     }
    
//   }, [tg]);

//   if (isLoading) {
//     return <Loader />;
//   }
  
//   if (error || !user) {
//       return (
//           <div className="auth-error-container">
//               <h1>NFT Case Battle</h1>
//               <p>{error || 'Будь ласка, відкрийте додаток через вашого Telegram-бота.'}</p>
//           </div>
//       );
//   }

//   return (
//     <Router>
//       <div className="app-container">
//         <Header user={user} />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
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



