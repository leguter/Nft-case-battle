// // Наприклад, у вашому файлі src/pages/LoginPage.jsx

// import TelegramLoginButton from '../../components/TelegramLoginButton/TelegramLoginButton';

// const LoginPage = () => {
//   return (
//     <div style={{ textAlign: 'center', paddingTop: '50px' }}>
//       <h1>Вхід на сайт</h1>
//       <p>Для продовження, будь ласка, авторизуйтесь:</p>
//       <TelegramLoginButton botName="@Sanyajjj_bot" />
//     </div>
//   );
// };



// import  { useEffect } from 'react';
// import css from './LoginPage.module.css'
// const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// const TELEGRAM_BOT_USERNAME = '@Sanyajjj_bot'; // Переконайтесь, що ім'я бота правильне
//         const botUsername = 'Sanyajjj_bot';
//   const telegramLoginUrl = `https://t.me/${botUsername}`;
// const LoginPage = () => {

//   useEffect(() => {
//     // Функція, яка буде викликана Telegram після успішної авторизації
//     window.onTelegramAuth = async (user) => {
//       try {
//         const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(user),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           // ВАЖЛИВО: Зберігаємо отриманий токен у localStorage
//           localStorage.setItem('accessToken', data.accessToken);
          
//           alert('Авторизація успішна!');
//           window.location.href = '/'; // Перенаправляємо на головну
//         } else {
//           const errorData = await response.json();
//           alert(`Помилка авторизації: ${errorData.message}`);
//         }
//       } catch (error) {
//         console.error('Помилка відправки даних на бекенд:', error);
//         alert('Не вдалося зв\'язатися з сервером.');
//       }
//     };

//     // Створюємо та додаємо скрипт Telegram Login Widget
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'onTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');

//     const container = document.getElementById('telegram-login-container');
//     if (container) {
//         container.appendChild(script);
//     }

//     return () => {
//       if (container && container.firstChild) {
//         container.removeChild(container.firstChild);
//       }
//       delete window.onTelegramAuth;
//     };
//   }, []);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
//       <h1>Вхід на сайт</h1>
//       <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
//        <a 
//               href={telegramLoginUrl} 
//               className={css.btnLink}
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//        <button type="button" className={css.btn} >Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
//        </a>
//     </div>
//   );
// };

// export default LoginPage;

// import  { useEffect } from 'react';
// // import css from './LoginPage.module.css'; // Видалено імпорт, оскільки файл CSS відсутній

// const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// // ВАЖЛИВО: Ім'я користувача бота БЕЗ символу '@'
// const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot'; 

// const LoginPage = () => {

//   useEffect(() => {
//     // Функція, яка буде викликана Telegram після успішної авторизації
//     window.onTelegramAuth = async (user) => {
//       try {
//         const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(user),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           // Зберігаємо отриманий токен у localStorage
//           localStorage.setItem('accessToken', data.accessToken);
          
//           alert('Авторизація успішна!');
//           window.location.href = '/'; // Перенаправляємо на головну
//         } else {
//           const errorData = await response.json();
//           alert(`Помилка авторизації: ${errorData.message}`);
//         }
//       } catch (error) {
//         console.error('Помилка відправки даних на бекенд:', error);
//         alert('Не вдалося зв\'язатися з сервером.');
//       }
//     };

//     // Створюємо та додаємо скрипт Telegram Login Widget
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'onTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');

//     const container = document.getElementById('telegram-login-container');
//     if (container) {
//         container.appendChild(script);
//     }

//     return () => {
//       if (container && container.firstChild) {
//         container.removeChild(container.firstChild);
//       }
//       delete window.onTelegramAuth;
//     };
//   }, []);

//   // Використовуємо інлайнові стилі або прості класи замість CSS-модуля
//   const containerStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '50px',
//     textAlign: 'center',
//     minHeight: '80vh'
//   };

//   const buttonWrapperStyles = {
//     marginTop: '20px'
//   };

//   return (
//     <div style={containerStyles}>
//       <h1>Вхід на сайт</h1>
//       <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
//       <div id="telegram-login-container" style={buttonWrapperStyles}></div>
//     </div>
//   );
// };

// export default LoginPage;

// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';

// const BACKEND_URL = 'https://back-for-project.onrender.com';
// const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot';

// // URL, на який Telegram ПОВЕРНЕ користувача після входу.
// const REDIRECT_URL = 'https://nft-case-battle.vercel.app/login';

// const LoginPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   useEffect(() => {
//     // --- КРОК 2: Обробка повернення від Telegram ---
//     // Перевіряємо, чи є в URL параметри, які надіслав Telegram
//     const telegramUserData = Object.fromEntries(searchParams.entries());
    
//     // Якщо є hash, значить, Telegram повернув нас сюди з даними
//     if (telegramUserData.hash && !isProcessing) {
//       setIsProcessing(true); // Запобігаємо повторній обробці

//       const handleTelegramCallback = async (user) => {
//         try {
//           const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(user),
//           });

//           if (response.ok) {
//             const data = await response.json();
//             localStorage.setItem('accessToken', data.accessToken);
//             // Перенаправляємо на головну сторінку після успішного входу
//             navigate('/');
//           } else {
//             const errorData = await response.json();
//             setError(`Помилка авторизації від сервера: ${errorData.message}`);
//           }
//         } catch (err) {
//           console.error('Помилка відправки даних на бекенд:', err);
//           setError('Не вдалося зв\'язатися з сервером.');
//         }
//       };

//       handleTelegramCallback(telegramUserData);
//       return; // Зупиняємо виконання, щоб не показувати кнопку
//     }

//     // --- КРОК 1: Відображення кнопки для входу ---
//     // Якщо параметрів немає, показуємо кнопку віджета
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
//     script.setAttribute('data-size', 'large');
//     // ВАЖЛИВО: Використовуємо data-auth-url для надійності
//     script.setAttribute('data-auth-url', REDIRECT_URL);
//     script.setAttribute('data-request-access', 'write');

//     const container = document.getElementById('telegram-login-container');
//     if (container) {
//         // Очищуємо контейнер перед додаванням нового скрипта
//         while (container.firstChild) {
//             container.removeChild(container.firstChild);
//         }
//         container.appendChild(script);
//     }

//   }, [searchParams, navigate, isProcessing]);

//   // Показуємо стан завантаження, поки обробляємо дані від Telegram
//   if (isProcessing) {
//     return <div style={{ textAlign: 'center', paddingTop: '50px' }}>Перевірка даних...</div>;
//   }

//   return (
//     <div className="login-page" style={{ textAlign: 'center', paddingTop: '50px' }}>
//       <h1>Вхід на сайт</h1>
//       <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div id="telegram-login-container"></div>
//     </div>
//   );
// };

// export default LoginPage;


import  { useEffect } from 'react';

const BACKEND_URL = 'https://back-for-project-1.onrender.com';
const TELEGRAM_BOT_USERNAME = 'Durovu_bot'; // Важливо: ім'я вашого бота

const LoginPage = () => {

  useEffect(() => {
    // Функція, яка буде викликана Telegram після успішної авторизації
    window.onTelegramAuth = async (user) => {
      try {
        // Відправляємо дані, отримані від Telegram, на наш бекенд
        const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // ВАЖЛИВЕ ВИПРАВЛЕННЯ: Ця опція змушує браузер відправляти cookie
          // при запитах на інший домен. Без неї авторизація неможлива.
          credentials: 'include', 
          body: JSON.stringify(user),
        });

        if (response.ok) {
          // Якщо бекенд успішно створив сесію, перенаправляємо користувача на головну
          alert('Авторизація успішна!');
          window.location.href = '/'; // Перехід на головну сторінку
        } else {
          const errorData = await response.json();
          alert(`Помилка авторизації: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Помилка відправки даних на бекенд:', error);
        alert('Не вдалося зв\'язатися з сервером.');
      }
    };

    // Створюємо та додаємо скрипт Telegram Login Widget на сторінку
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    const container = document.getElementById('telegram-login-container');
    if (container) {
        container.appendChild(script);
    }
    

    // Прибираємо скрипт при розмонтуванні компонента
    return () => {
      const container = document.getElementById('telegram-login-container');
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      delete window.onTelegramAuth;
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
      <h1>Вхід на сайт</h1>
      <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
      <div id="telegram-login-container" style={{ marginTop: '20px' }}></div>
    </div>
  );
};

export default LoginPage;