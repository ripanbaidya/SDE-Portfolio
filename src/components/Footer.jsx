import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='copy'>
		<small className="copyright">
  			© {new Date().getFullYear()} Ripan Baidya ✨. All rights reserved.
		</small>
    </div>
  );
};

export default Footer;
