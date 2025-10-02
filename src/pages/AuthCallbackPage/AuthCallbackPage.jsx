import  { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://back-for-project-1.onrender.com';

const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Обробка даних...');

  useEffect(() => {
    // КРОК 2: Компонент отримує дані від Telegram з URL
    const telegramUserData = Object.fromEntries(searchParams.entries());
    
    // Перевіряємо, чи є hash - головний параметр, що підтверджує успішний вхід
    if (telegramUserData.hash) {
      const handleLogin = async (user) => {
        try {
          // КРОК 3: Відправляємо дані на наш бекенд
          const response = await fetch(`${BACKEND_URL}/api/auth/telegram`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
          });

          if (response.ok) {
            const data = await response.json();
            // КРОК 4: Зберігаємо токен і перенаправляємо на головну
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/');
          } else {
            const errorData = await response.json();
            setStatus(`Помилка авторизації: ${errorData.message}`);
          }
        } catch (err) {
          setStatus('Не вдалося зв\'язатися з сервером.');
        }
      };

      handleLogin(telegramUserData);
    } else {
        setStatus('Не знайдено дані для авторизації. Спробуйте увійти знову.');
    }
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', color: 'white' }}>
      <h1>{status}</h1>
    </div>
  );
};

export default AuthCallbackPage;
