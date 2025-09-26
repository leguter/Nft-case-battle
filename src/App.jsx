
import './App.css'
// import CaseList from './components/CaseList/CaseList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import CasePage from './pages/CasePage/CasePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Loader from './components/Loader/Loader';

// function App() {

//   return (
//     <>
//     {/* <Header /> */}
//        <Router>
//       <div className="app-container">
//         <Header />
//         <main>
//           <Routes>
//             {/* Маршрут для головної сторінки */}
//             <Route path="/" element={<HomePage />} />
//             {/* Маршрут для сторінки кейса. :caseId - це динамічний параметр */}
//              <Route path="/login" element={<LoginPage />} />
//             <Route path="/case/:caseId" element={<CasePage />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//     </>
//   )
// }

// export default App
import  { useState, useEffect } from 'react';
const BACKEND_URL = 'https://back-for-project-1.onrender.com';

function App() {
  // Стан для зберігання даних користувача. null - якщо не залогінений.
  const [user, setUser] = useState(null);
  // Стан для відображення завантажувача під час першої перевірки
  const [isLoading, setIsLoading] = useState(true);

  // Цей хук виконується ОДИН раз при першому завантаженні додатку
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/profile`, {
          // credentials: 'include' наказує браузеру відправити cookie сесії
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Зберігаємо дані користувача у стані
        } else {
          setUser(null); // Якщо відповідь з помилкою - користувач не залогінений
        }
      } catch (error) {
        console.error('Помилка перевірки статусу авторизації:', error);
        setUser(null); // При мережевій помилці теж вважаємо, що не залогінений
      } finally {
        // У будь-якому випадку прибираємо завантажувач
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []); // Пустий масив залежностей означає "виконати тільки при монтуванні"

  // Поки йде перевірка, показуємо глобальний завантажувач
  if (isLoading) {
    return <Loader />;
  }

  // Після перевірки рендеримо основний інтерфейс з роутером
  return (
    <Router>
      <div className="app-container">
        {/* Header отримує дані користувача, щоб знати, що показувати: профіль чи кнопку входу */}
        <Header user={user} />
        <main>
          <Routes>
            {/* Маршрут для головної сторінки */}
            <Route path="/" element={<HomePage />} />
            
            {/* Маршрут для сторінки входу */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Маршрут для сторінки кейса. :caseId - це динамічний параметр */}
            <Route 
              path="/case/:caseId" 
              // CasePage отримує і дані користувача, і функцію для їх оновлення (щоб змінювати баланс)
              element={<CasePage user={user} setUser={setUser} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;