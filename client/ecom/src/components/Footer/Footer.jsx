import img2 from "../../assets/img/payment.png";
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>pages</span>
          <span>stores</span>
          <span>compare</span>
          <span>cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.</span>
          
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Margaretstore </span>
          <span className="copyright"> copyright 2024 reserved</span>
        </div>
        <div className="right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
