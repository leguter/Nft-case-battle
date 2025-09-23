
import css from "./Header.module.css";
import Logo from "../Logo/Logo"
const Header = () => {
     return (
    <div className={css.container}>
 <Logo />
<h1 className={css.name}>NFT CASE BATTLE </h1>
<button type="button" className={css.btn} >Зареєструватись</button>
</div>
     )
};
export default Header;