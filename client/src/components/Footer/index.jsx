import "./index.scss";
import InstagramIcon from "../../assets/images/instagram.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import YouTubeIcon from "../../assets/images/youtube.svg";
import VkIcon from "../../assets/images/vk.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import WhatsAppIcon from "../../assets/images/whatsapp.svg";

const socialNavigation = {

}
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content-copy">
                        © {new Date().getFullYear()}, Beeline. Все права защищены
                    </div>
                    <div className="footer__content-info">
                        <a href="https://goo.gl/maps/QjFf1QTw7rJG56te7" className="footer__info-link">Офисы продаж</a>
                        <a href="tel:+996(500)010101" className="footer__info-link">+996 (775) 58 0611</a>
                        <a href="tel:+996(601)" className="footer__info-link">Справочная *611</a>
                        <a href="mailto:answer@beeline.kg" className="footer__info-link">answer@beeline.kg</a>
                    </div>
                    <nav className="footer__content-navigation">
                        <a href="" className="footer__navigation-link">
                            <img src={InstagramIcon} alt="instagram" className="footer__link-icon"/>
                        </a>
                        <a href="" className="footer__navigation-link">
                            <img src={FacebookIcon} alt="facebook" className="footer__link-icon"/>
                        </a>
                        <a href="" className="footer__navigation-link">
                            <img src={YouTubeIcon} alt="youtube" className="footer__link-icon"/>
                        </a>
                        <a href="" className="footer__navigation-link">
                            <img src={VkIcon} alt="vk" className="footer__link-icon"/>
                        </a>
                        <a href="" className="footer__navigation-link">
                            <img src={TwitterIcon} alt="twitter" className="footer__link-icon"/>
                        </a>
                        <a href="" className="footer__navigation-link">
                            <img src={WhatsAppIcon} alt="whatsapp" className="footer__link-icon"/>
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer
