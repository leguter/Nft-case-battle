
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
// URL вашого бекенду. Винесіть його в константу для зручності.
const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// Замініть на ім'я вашого бота
const TELEGRAM_BOT_USERNAME = '@Sanyajjj_bot'; 






// import { Link } from 'react-router-dom';
// // Припускається, що у вас є ці імпорти

// const Header = ({ user, onLoginClick }) => { // 1. Приймаємо onLoginClick
//   const handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     window.location.reload();
//   };

//   return (
//     <header className={css.container}>
//        <Logo />
//  
//       <Link to="/" className={css.name}><h1 className={css.name}>NFT CASE BATTLE </h1></Link>
      
//       {/* Цей div обгортає всю логіку для відображення користувача або кнопки входу */}
//       <div className={css.userInfoContainer}> 
//         {user ? (
//           // Стан, коли користувач залогінений (ваш код без змін)
//           <>
//             <div>
//               <p>{user.firstName || user.username}</p>
//               <p className="balance">{user.balance} 💎</p>
//             </div>
//             <img 
//          src={user.photoUrl || `https://placehold.co/48x48/777/FFF?text=${user.firstName?.[0] || 'U'}`} 
//               alt="Avatar" 
//               className="avatar"
//             />
//             <button onClick={handleLogout} className="logout-button">Вийти</button>
//           </>
//         ) : (
//           // Стан, коли користувач не залогінений
//           // 2. Замінюємо <Link> на <button> з onClick
//           <button type="button" className={css.btn} onClick={onLoginClick}>
//             Увійти
//             <img className={css.icon} src="/tgicon.svg" width="16px" height="16px" alt="Telegram Icon"/>
//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from 'react-router-dom';

// --- НАЛАШТУВАННЯ ДЛЯ TELEGRAM LOGIN ---
const TELEGRAM_BOT_ID = '8320276216'; // ID вашого бота (цифри)
const YOUR_SITE_ORIGIN = 'https://nft-case-battle.vercel.app';
// URL, куди Telegram поверне користувача після входу
const RETURN_URL = `${YOUR_SITE_ORIGIN}/auth/telegram/callback`;

// Повне посилання для авторизації, яке ми будемо використовувати
const telegramLoginUrl = `https://oauth.telegram.org/auth?bot_id=${TELEGRAM_BOT_ID}&origin=${encodeURIComponent(YOUR_SITE_ORIGIN)}&return_to=${encodeURIComponent(RETURN_URL)}`;


const Header = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <header className={css.container}>
       <Logo />
      <Link to="/" className={css.name}>NFT CASE BATTLE</Link>
      <div className={css.userInfoContainer}> 
        {user ? (
          <>
            <div>
              <p>{user.firstName || user.username}</p>
              <p className={css.balance}>{user.balance} 💎</p>
            </div>
            <img 
              src={user.photoUrl || `https://placehold.co/48x48/777/FFF?text=${user.firstName?.[0] || 'U'}`} 
              alt="Avatar" 
              className={css.avatar}
            />
            <button onClick={handleLogout} className={css.logoutButton}>Вийти</button>
          </>
        ) : (
          // Тепер це звичайне посилання, яке веде на сайт Telegram
          <a href={telegramLoginUrl} className={css.btnLink}>
            <button type="button" className={css.btn}>
              Увійти
              <img className={css.icon} src="/tgicon.svg" width="16px" height="16px" alt="Telegram Icon"/>
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;





