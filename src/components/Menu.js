import { NavLink as Link } from 'react-router-dom';


const Menu = () => {

  const LinkClass = (link) => {
    if (window.location.pathname === "/" || window.location.pathname === "/work"){
      return "link active"
    } else {
        return "link"
    }
  }

  return (
    <div id="menu" className="menu">

      <Link to="/projects" className="link">
        <span className="link-icon">
          <i className="bi bi-flower1"></i>
        </span>
        <span className="link-title">Projects</span>
      </Link>

      <Link to="/stack" className="link">
        <span className="link-icon">
          <i className="bi bi-braces"></i>
        </span>
        <span className="link-title">Stack</span>
      </Link>

      <Link to="/work" className={LinkClass}>
        <span className="link-icon">
          <i className="bi bi-keyboard-fill"></i>

        </span>
        <span className="link-title">Work</span>
      </Link>
    
      <Link to="/feedback" className="link">
        <span className="link-icon">
          <i className="bi bi-bag-heart"></i>
        </span>
        <span className="link-title">Feedback</span>
      </Link>
    </div>
  );
}
 
export default Menu;