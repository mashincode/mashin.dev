import { Link } from "react-router-dom"

const NotFound = () => {
  return (

    <div id="main" className="main container-fluid justify-content-center">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to the homepage...</Link>
    </div>
  );

}


export default NotFound;