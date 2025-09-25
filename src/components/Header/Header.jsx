
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
import { useNavigate } from 'react-router-dom';
const Header = () => {
     const navigate = useNavigate();

  // Функція, яка буде викликатись при кліку на кнопку
  const handleLoginClick = () => {
    // Перенаправляємо користувача на сторінку /login
    navigate('/login');
  };
     return (
    <div className={css.container}>
 <Logo />
<h1 className={css.name}>NFT CASE BATTLE </h1>
<button type="button" className={css.btn} onClick={handleLoginClick}>Увійти<img className={css.icon} src="../../../public/tgicon.svg" width="16px" height="16px"></img></button>
</div>
     )
};
export default Header;