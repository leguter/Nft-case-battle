
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
// URL вашого бекенду. Винесіть його в константу для зручності.
const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// Замініть на ім'я вашого бота
const TELEGRAM_BOT_USERNAME = '@Sanyajjj_bot'; 


// import { Link } from 'react-router-dom';
// const Header = ({ user }) => {
//   const handleLogout = () => {
//     // При виході видаляємо токен і перезавантажуємо сторінку
//     localStorage.removeItem('accessToken');
//     window.location.reload();
//   };

//   return (
//     <header className="app-header">
//        <div className={css.container}>
//        <Logo />
 
//       <Link to="/" className={css.name}><h1 className={css.name}>NFT CASE BATTLE </h1></Link>
//         {user ? (
//           // Стан, коли користувач залогінений
//           <>
//             <div>
//               <p>{user.firstName || user.username}</p>
//               <p className="balance">{user.balance} 💎</p>
//             </div>
//             <img 
//               src={user.photoUrl || `https://placehold.co/48x48/777/FFF?text=${user.firstName?.[0] || 'U'}`} 
//               alt="Avatar" 
//               className="avatar"
//             />
//             <button onClick={handleLogout} className="logout-button">Вийти</button>
//           </>
//         ) : (
//           // ВАЖЛИВА ЗМІНА: Тепер це посилання на /login
//       //      <a 
//       //   href={telegramLoginUrl} 
//       //   className={css.btnLink}
//       //   target="_blank" 
//       //   rel="noopener noreferrer"
//       // >
//           <Link to="/login" className={css.btnLink}>
            
//         <button type="button" className={css.btn} >Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
     
//            </Link>
//           //  </a>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { Link } from 'react-router-dom';
// Припускається, що у вас є ці імпорти

const Header = ({ user, onLoginClick }) => { // 1. Приймаємо onLoginClick
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <header className={css.container}>
       <Logo />
 
      <Link to="/" className={css.name}><h1 className={css.name}>NFT CASE BATTLE </h1></Link>
      
      {/* Цей div обгортає всю логіку для відображення користувача або кнопки входу */}
      <div className={css.userInfoContainer}> 
        {user ? (
          // Стан, коли користувач залогінений (ваш код без змін)
          <>
            <div>
              <p>{user.firstName || user.username}</p>
              <p className="balance">{user.balance} 💎</p>
            </div>
            <img 
         src={user.photoUrl || `https://placehold.co/48x48/777/FFF?text=${user.firstName?.[0] || 'U'}`} 
              alt="Avatar" 
              className="avatar"
            />
            <button onClick={handleLogout} className="logout-button">Вийти</button>
          </>
        ) : (
          // Стан, коли користувач не залогінений
          // 2. Замінюємо <Link> на <button> з onClick
          <button type="button" className={css.btn} onClick={onLoginClick}>
            Увійти
            <img className={css.icon} src="/tgicon.svg" width="16px" height="16px" alt="Telegram Icon"/>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

