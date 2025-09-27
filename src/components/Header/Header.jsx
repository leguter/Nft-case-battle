
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
// URL вашого бекенду. Винесіть його в константу для зручності.
const BACKEND_URL = 'https://back-for-project-1.onrender.com';
// Замініть на ім'я вашого бота
const TELEGRAM_BOT_USERNAME = '@Sanyajjj_bot'; 

// --- Компоненти для чистоти коду ---

// Компонент Хедера: динамічно показує профіль або кнопку входу
// const Header = ({ user }) => {
  //       const botUsername = 'Sanyajjj_bot';
  // const telegramLoginUrl = `https://t.me/${botUsername}`;

//   return (
//     <header className="bg-gray-800 shadow-lg">
//       <div className={css.container}>
//  <Logo />
// <h1 className={css.name}>NFT CASE BATTLE </h1>


//         {user ? (
//           // Стан, коли користувач залогінений
//           <div className="flex items-center gap-4">
//             <div className="text-right">
//               <p className="font-semibold">{user.firstName || user.username}</p>
//               <p className="text-yellow-400 font-bold">{user.balance} 💎</p>
//             </div>
//             <img 
//               src={user.photoUrl || `https://placehold.co/48x48/777/FFF?text=${user.firstName?.[0] || 'U'}`} 
//               alt="Avatar" 
//               className="w-12 h-12 rounded-full border-2 border-yellow-400"
//             />
//           </div>
//         ) : (
//           // Стан, коли користувач - гість
//          <a 
//         href={telegramLoginUrl} 
//         className={css.btnLink}
//         target="_blank" 
//         rel="noopener noreferrer"
//       >
//         <button type="button" className={css.btn} >Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
//       </a>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { Link } from 'react-router-dom';
const Header = ({ user }) => {
  const handleLogout = () => {
    // При виході видаляємо токен і перезавантажуємо сторінку
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <header className="app-header">
       <div className={css.container}>
       <Logo />
 
      <Link to="/" className={css.name}><h1 className={css.name}>NFT CASE BATTLE </h1></Link>
        {user ? (
          // Стан, коли користувач залогінений
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
          // ВАЖЛИВА ЗМІНА: Тепер це посилання на /login
      //      <a 
      //   href={telegramLoginUrl} 
      //   className={css.btnLink}
      //   target="_blank" 
      //   rel="noopener noreferrer"
      // >
          <Link to="/login" className={css.btnLink}>
            
        <button type="button" className={css.btn} >Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
     
           </Link>
          //  </a>
        )}
      </div>
    </header>
  );
};

export default Header;