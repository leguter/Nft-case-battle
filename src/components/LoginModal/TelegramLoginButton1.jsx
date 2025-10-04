import { useEffect } from 'react';

const TelegramLoginButton = () => {
  useEffect(() => {
    // Видаляємо попередній скрипт, щоб не дублювався при React re-render
    const oldScript = document.getElementById('telegram-login');
    if (oldScript) oldScript.remove();

    // Створюємо новий скрипт Telegram Login Widget
    const script = document.createElement('script');
    script.id = 'telegram-login';
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.setAttribute('data-telegram-login', '@Sanyajjj_bot'); // <--- заміни на свій @Bot
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', 'https://nft-case-battle.vercel.app/auth/telegram/callback');
    script.setAttribute('data-request-access', 'write');
    script.async = true;

    document.getElementById('telegram-button-container').appendChild(script);
  }, []);

  return (
    <div
      id="telegram-button-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',
      }}
    />
  );
};

export default TelegramLoginButton;
