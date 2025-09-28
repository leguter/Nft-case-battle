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

import  { useEffect, useState } from 'react';

const BACKEND_URL = 'https://back-for-project-1.onrender.com';
const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot';

const LoginPage = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    console.log(message);
    setLogs(prevLogs => [...prevLogs, message]);
  };

  useEffect(() => {
    addLog('--- Початок діагностики LoginPage ---');

    // КРОК 1: Перевіряємо, з якого домену ми працюємо
    const currentOrigin = window.location.origin;
    addLog(`[INFO] Поточний домен сайту (origin): ${currentOrigin}`);
    addLog(`[INFO] Очікуваний домен в BotFather: nft-case-battle.vercel.app`);
    if (currentOrigin !== 'https://nft-case-battle.vercel.app') {
        addLog('[ПОПЕРЕДЖЕННЯ] Домен сайту не співпадає з очікуваним! Це може бути причиною проблеми.');
    }

    // КРОК 2: Визначаємо функцію для Telegram
    window.onTelegramAuth = async (user) => {
      addLog('[SUCCESS] Telegram викликав функцію onTelegramAuth! Проблема НЕ в домені.');
      addLog('[DATA] Отримано дані користувача: ' + JSON.stringify(user, null, 2));
      
      try {
        addLog('[FETCH] Відправка даних на бекенд...');
        const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          addLog('[SUCCESS] Токен успішно збережено в localStorage.');
          alert('Авторизація успішна!');
          window.location.href = '/';
        } else {
          const errorData = await response.json();
          addLog(`[ERROR] Помилка від бекенду: ${errorData.message}`);
          alert(`Помилка авторизації: ${errorData.message}`);
        }
      } catch (error) {
        addLog(`[FATAL ERROR] Помилка відправки даних на бекенд: ${error.message}`);
        alert('Не вдалося зв\'язатися з сервером.');
      }
    };
    addLog('[INFO] Глобальна функція window.onTelegramAuth успішно створена.');


    // КРОК 3: Створюємо та додаємо скрипт віджета
    addLog('[INFO] Створення скрипта для віджета Telegram...');
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    // Додаємо обробники для перевірки завантаження скрипта
    script.onload = () => {
        addLog('[SUCCESS] Скрипт віджета Telegram успішно завантажено.');
    };
    script.onerror = () => {
        addLog('[FATAL ERROR] Не вдалося завантажити скрипт віджета Telegram! Перевірте блокувальники реклами або мережу.');
    };

    const container = document.getElementById('telegram-login-container');
    if (container) {
        container.innerHTML = ''; // Очищуємо контейнер на випадок повторного рендеру
        container.appendChild(script);
        addLog('[INFO] Скрипт віджета додано на сторінку.');
    } else {
        addLog('[ERROR] Не знайдено контейнер #telegram-login-container.');
    }

    return () => {
      delete window.onTelegramAuth;
      addLog('--- Компонент LoginPage демонтовано, очищено. ---');
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Вхід на сайт</h1>
      <p>Натисніть кнопку нижче, щоб авторизуватися через Telegram.</p>
      <div id="telegram-login-container"></div>
      
      <div style={{ marginTop: '30px', background: '#222', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', textAlign: 'left' }}>
        <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '10px', marginBottom: '10px' }}>Діагностичні логи:</h3>
        {logs.map((log, index) => (
          <div key={index} style={{ color: log.includes('SUCCESS') ? 'lightgreen' : log.includes('ERROR') ? 'red' : 'white', marginBottom: '5px' }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;

