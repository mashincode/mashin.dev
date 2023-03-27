// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header> 
      {/* <a href="#">
        <i className="bi bi-linkedin"></i>
      </a> */}

      <a target="_blank" rel="noreferrer" href="https://t.me/mashincode">
        <i className="bi bi-telegram"></i>
      </a>
{/* 
      <a href="#">
       <i className="bi bi-youtube"></i>
      </a> */}

      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/friendly.mashin/">
        <i className="bi bi-instagram"></i>
      </a>

      {/* <a href="#">
       <i className="bi bi-medium"></i>
      </a> */}

      <a target="_blank" rel="noreferrer" href="https://github.com/mashincode">
        <i className="bi bi-github"></i>
      </a>
    </header>
  );
}
 
export default Navbar;