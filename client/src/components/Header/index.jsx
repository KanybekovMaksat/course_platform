import "./index.scss";

import LogoImg from "../../assets/images/logo.svg";
import UserImg from "../../assets/images/user.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <nav className="header__content-navigation">
                        <Link  to="/" className="header__navigation-link">
                            <img src={LogoImg} alt="MaxUp" className="header__link-img header__logo"/>
                        </Link>
                        <Link to="/aboutus" className="header__navigation-link">О проекте</Link>
                        <Link to="/courses" className="header__navigation-link">Список курсов</Link>
                        <Link to="/faq" className="header__navigation-link">FAQ</Link>
                    </nav>
                    <div className="header__content-avatar">
                       <Link to="/profile"><img src={UserImg} alt="Me" className="header__avatar-img header__avatar"/></Link>
                    </div>                    
                </div>
            </div>
        </header>
    )
}
export default Header
