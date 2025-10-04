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

// LoginModal.jsx
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export default function LoginModal({ setUser, onClose }) {
  const [loading, setLoading] = useState(false);

  const loginBackend = async (userData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) throw new Error("Backend login failed");

      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTelegramLogin = async () => {
    setLoading(true);

    // --- Mini App у Telegram ---
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
      await loginBackend(tgUser);
      setLoading(false);
      onClose();
      return;
    }

    // --- Звичайний сайт, відкриваємо Telegram Login Window ---
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const loginWindow = window.open(
      `https://telegram.me/${import.meta.env.VITE_TELEGRAM_BOT_USERNAME}?start=login`,
      "TelegramLogin",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const handleMessage = async (event) => {
      if (event.origin !== import.meta.env.VITE_FRONTEND_ORIGIN) return;

      const { accessToken, user } = event.data || {};
      if (accessToken && user) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        loginWindow.close();
        window.removeEventListener("message", handleMessage);
        setLoading(false);
        onClose();
      }
    };

    window.addEventListener("message", handleMessage);
  };

  return (
    <div className="login-modal">
      <h2>Увійти через Telegram</h2>
      <button onClick={handleTelegramLogin} disabled={loading}>
        {loading ? "Завантаження..." : "Увійти"}
      </button>
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}


