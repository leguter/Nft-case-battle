// import  { useEffect } from 'react';

// const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// const TELEGRAM_BOT_USERNAME = 'Sanyajjj_bot';

// const LoginModal = ({ onClose, onLoginSuccess }) => {
//   useEffect(() => {
//     // Ця функція викликається віджетом Telegram
//     window.onTelegramAuth = async (user) => {
//       try {
//         const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(user),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           // Викликаємо функцію з App.jsx для оновлення стану
//           onLoginSuccess(data.accessToken, data.user); 
//         } else {
//           alert('Помилка авторизації на сервері.');
//         }
//       } catch (error) {
//         console.error('Не вдалося відправити дані на бекенд:', error);
//       }
//     };

//     // Створюємо та додаємо скрипт віджета
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'onTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');

//     document.getElementById('telegram-login-container').appendChild(script);

//     // Очищення при закритті модального вікна
//     return () => {
//       delete window.onTelegramAuth;
//     };
//   }, [onLoginSuccess]);

//   return (
//     // Це базові стилі для модального вікна, ви можете замінити їх на свої класи
//     <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
//       <div style={{ backgroundColor: '#2d3748', padding: '40px', borderRadius: '10px', position: 'relative', color: 'white' }}>
//         <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
//         <h2 style={{ marginBottom: '20px' }}>Вхід через Telegram</h2>
//         <div id="telegram-login-container"></div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

function LoginModal({ onClose, BACKEND_URL }) {
  return (
    <div className="login-modal">
      <h2>Увійти через Telegram</h2>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="Sanyajjj_bot"  // 👈 заміни на ім’я свого бота
        data-size="large"
        data-userpic="false"
        data-request-access="write"
        data-auth-url={`${BACKEND_URL}/api/auth/telegram`}
      ></script>

      <button onClick={onClose}>Закрити</button>
    </div>
  );
}
export default LoginModal;