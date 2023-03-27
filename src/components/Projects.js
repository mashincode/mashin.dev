import Scroller from "../utils/Scroller";
import useFetch from "../utils/useFetch";
import Cards from "./Cards";

const Projects = () => {
  const { error, isPending, data} = useFetch(process.env.REACT_APP_API_URL+"projects")


  Scroller();
  
  return (
    <div id="main" className="main container-fluid justify-content-center">
      { error && <div>{ error }</div> }
      { isPending && <div className="loading_box">Loading...</div> }
      { data && <Cards data={data} /> }
    </div>
  );
}
 
export default Projects;