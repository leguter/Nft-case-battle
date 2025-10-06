// import  { useEffect } from 'react';

// // Це може бути ваш хук або функція для роботи з авторизацією
// // import { useAuth } from '../context/AuthContext'; 

// const TelegramLoginButton = ({ botName }) => {
//   // const { login } = useAuth(); // Приклад використання контексту для авторизації

//   useEffect(() => {
//     // Створюємо функцію-обробник в глобальному об'єкті window
//     window.onTelegramAuth = async (user) => {
//       console.log('Дані отримано від Telegram:', user);
      
//       try {
//         // Відправляємо дані на наш бекенд
//         const response = await fetch('http://localhost:3001/api/auth/telegram', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(user),
//         });

//         const data = await response.json();

//         if (data.success) {
//           console.log('Успішна авторизація на бекенді:', data);
//           // Зберігаємо токен і дані користувача
//           localStorage.setItem('authToken', data.token);
//           localStorage.setItem('user', JSON.stringify(data.user));
          
//           // Тут ви можете викликати свою функцію для оновлення стану авторизації
//           // login(data.user, data.token);

//           // Опціонально: перезавантажуємо сторінку або робимо редірект
//           window.location.reload(); 
//         } else {
//           throw new Error(data.message || 'Помилка авторизації');
//         }
//       } catch (error) {
//         console.error('Помилка при відправці даних на бекенд:', error);
//         // Можна показати сповіщення про помилку
//       }
//     };

//     // Створюємо та додаємо скрипт Telegram в DOM
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', botName);
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'onTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');

//     document.getElementById('telegram-login-container').appendChild(script);

//     // Очищення при розмонтуванні компонента
//     return () => {
//       const container = document.getElementById('telegram-login-container');
//       if (container) {
//         container.innerHTML = '';
//       }
//     };
//   }, [botName]);

//   return <div id="telegram-login-container"></div>;
// };

// export default TelegramLoginButton;