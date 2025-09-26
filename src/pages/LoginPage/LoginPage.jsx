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



import  { useEffect } from 'react';

const BACKEND_URL = 'https://back-for-project-1.onrender.com';
const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot'; // Важливо: ім'я вашого бота

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
