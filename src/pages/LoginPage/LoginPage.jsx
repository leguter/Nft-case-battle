// Наприклад, у вашому файлі src/pages/LoginPage.jsx

import TelegramLoginButton from '../../components/TelegramLoginButton/TelegramLoginButton';

const LoginPage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Вхід на сайт</h1>
      <p>Для продовження, будь ласка, авторизуйтесь:</p>
      <TelegramLoginButton botName="YOUR_BOT_USERNAME" />
    </div>
  );
};

export default LoginPage;