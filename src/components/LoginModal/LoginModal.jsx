// import  { useEffect } from 'react';

// import TelegramLoginButton from "./TelegramLoginButton1";

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


// import { useEffect } from "react";

// export default function LoginModal({ onClose }) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://telegram.org/js/telegram-widget.js?22";
//     script.async = true;
//     script.setAttribute("data-telegram-login", "Sanyajjj_bot"); // без @
//     script.setAttribute("data-size", "large");
//     script.setAttribute("data-userpic", "false");
//     script.setAttribute("data-request-access", "write");
//     script.setAttribute("data-auth-url", "https://back-for-project-1.onrender.com/api/auth/telegram");

//     document.getElementById("telegram-login").appendChild(script);

//     return () => {
//       document.getElementById("telegram-login").innerHTML = "";
//     };
//   }, []);

//   return (
//     <div className="login-modal">
//       <button onClick={onClose}>✖</button>
//       <div id="telegram-login"></div>
//     </div>
//   );
// }


// src/components/LoginModal.jsx
import { useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export default function LoginModal({ onLogin, onClose }) {

  useEffect(() => {
    const handleAuth = async (event) => {
      const user = event.detail;
      console.log("[DEBUG] Telegram user:", user);

      try {
        const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data.user));
          if (onLogin) onLogin(data.user);
          if (onClose) onClose();
        } else {
          console.error("❌ Auth failed:", data);
        }
      } catch (err) {
        console.error("❌ Network error:", err);
      }
    };

    window.addEventListener("telegram-auth", handleAuth);
    return () => window.removeEventListener("telegram-auth", handleAuth);
  }, [onLogin, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-lg font-bold mb-3">Увійти через Telegram</h2>
        {/* Сам віджет підхоплюється з index.html */}
        <div id="telegram-login-widget" />
        <button
          className="mt-4 text-sm text-gray-500 hover:underline"
          onClick={onClose}
        >
          Скасувати
        </button>
      </div>
    </div>
  );
}
