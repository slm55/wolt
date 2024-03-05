import PlaceIcon from "@mui/icons-material/Place";
import PublicIcon from "@mui/icons-material/Public";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/wolt-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-main-child">
          <Logo fill="white" />
          <img
            src="https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/a0fa3e1c7ca41a70c6285d6c7b18c92b/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/d52acac7f94db66263f5ad9e01c41c82/google-play-badge.png"
            alt=""
          />
        </div>
      <div className="footer-main-child">
        <p>Partner with Wolt</p>
        <Link>For couriers</Link>
        <Link>For merchants</Link>
        <Link>For affiliates</Link>
      </div>
      <div className="footer-main-child">
        <p>Company</p>
        <Link>About us</Link>
        <Link>What we stand for</Link>
        <Link>Jobs</Link>
        <Link>Sustainability</Link>
        <Link>Security</Link>
        <Link>Investors</Link>
      </div>
      <div className="footer-main-child">
        <p>Products</p>
        <Link>Wolt Drive</Link>
        <Link>Wolt Market</Link>
        <Link>Wolt+</Link>
        <Link>Wolt for Work</Link>
        <Link>Wolt Ads</Link>
      </div>
      <div className="footer-main-child">
        <p>Useful links</p>
        <Link>Support</Link>
        <Link>Media</Link>
        <Link>Contact</Link>
        <Link>Speak up</Link>
        <Link>Promo codes</Link>
        <Link>Developers</Link>
      </div>
      <div className="footer-main-child">
        <p>Follow us</p>
        <Link>Blog</Link>
        <Link>Engineering Blog</Link>
        <Link>Instagram</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>LinkedIn</Link>
        <Link>Wolt Life</Link>
      </div>
      </div>
      <div className="footer-btm">
        <div className="footer-btm-left">
          <div>
            <PlaceIcon /> <Link>Kazakhstan</Link>
          </div>
          <div>
            <PublicIcon /> <Link>English</Link>
          </div>
          <div>
            <VisibilityOffIcon /> <Link>Accessibility</Link>
          </div>
        </div>
        <div className="footer-btm-right">
          <div>
            <Link>Accessibility Statement</Link>
            <Link>User Terms of Service</Link>
            <Link>Privacy Statement</Link>
          </div>
          <div>©️ Wolt 2014–2024</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
