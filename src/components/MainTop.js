import { Link } from "react-router-dom";

import main_right_me from '../assets/img/me.png';

const MainTop = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="main-left" className="col-lg-6 col-sm-12">
        <div id="main-left-text">
          <p>I'm <span className="fw-bold">Artem</span>, a full-stack developer, freelancer, and maker.</p>
          <p>In 2023 I split my time between <Link to="/work">freelancing</Link> and working on my own <Link to="/projects">projects</Link></p><p>Use this website and my social media to follow me on my journey</p>
        </div> 

          <div id="main-buttons">
            <button onClick={(e) => {
                window.location.href = "mailto:artyom.mashin@gmail.com";
                e.preventDefault();
            }} id="invite-me-btn" className="btn">Invite me to project  <i className="bi bi-search-heart"></i></button>

            <Link to="/work">
              <button id="browse-projects-btn" className="btn">Browse projects</button>
            </Link>
          </div>

        </div>

        <div id="main-right"  className="col-lg-6 col-sm-12">
          <img id="main-right-image" height="540" src={main_right_me} alt=""/>
        </div>
      </div>   
    </div>
  );
}
 
export default MainTop;