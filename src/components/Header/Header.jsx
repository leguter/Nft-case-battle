
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
// import { useNavigate } from 'react-router-dom';
const Header = () => {
       const botUsername = 'Sanyajjj_bot';
  const telegramLoginUrl = `https://t.me/${botUsername}`;
     // const navigate = useNavigate();

  // Функція, яка буде викликатись при кліку на кнопку
//   const handleLoginClick = () => {
//     // Перенаправляємо користувача на сторінку /login
//     navigate('/login');
//   };
     return (
    <div className={css.container}>
 <Logo />
<h1 className={css.name}>NFT CASE BATTLE </h1>
<a 
        href={telegramLoginUrl} 
        className={css.btnLink}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button type="button" className={css.btn} >Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
      </a>

</div>
     )
};
export default Header;