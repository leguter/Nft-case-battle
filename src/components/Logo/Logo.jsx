import css from "./Logo.module.css";
import logo from "../../../public/logo1.png"
const Logo = () => {
 return (
    <div>
        <img  className={css.logo} src={logo} alt="logo" />
    </div>
 )


};
export default Logo;