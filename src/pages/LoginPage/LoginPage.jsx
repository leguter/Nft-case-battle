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

import  { useEffect } from 'react';
// import css from './LoginPage.module.css'; // Видалено імпорт, оскільки файл CSS відсутній

const BACKEND_URL = 'https://back-for-project.onrender.com';
// ВАЖЛИВО: Ім'я користувача бота БЕЗ символу '@'
const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot'; 

const LoginPage = () => {

  useEffect(() => {
    // Функція, яка буде викликана Telegram після успішної авторизації
    window.onTelegramAuth = async (user) => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const data = await response.json();
          // Зберігаємо отриманий токен у localStorage
          localStorage.setItem('accessToken', data.accessToken);
          
          alert('Авторизація успішна!');
          window.location.href = '/'; // Перенаправляємо на головну
        } else {
          const errorData = await response.json();
          alert(`Помилка авторизації: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Помилка відправки даних на бекенд:', error);
        alert('Не вдалося зв\'язатися з сервером.');
      }
    };

    // Створюємо та додаємо скрипт Telegram Login Widget
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

    return () => {
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
      delete window.onTelegramAuth;
    };
  }, []);

  // Використовуємо інлайнові стилі або прості класи замість CSS-модуля
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    textAlign: 'center',
    minHeight: '80vh'
  };

  const buttonWrapperStyles = {
    marginTop: '20px'
  };

  return (
    <div style={containerStyles}>
      <h1>Вхід на сайт</h1>
      <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
      <div id="telegram-login-container" style={buttonWrapperStyles}></div>
    </div>
  );
};

export default LoginPage;