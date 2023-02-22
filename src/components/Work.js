import Scroller from "../utils/Scroller";
import useFetch from "../utils/useFetch";
import Cards from "./Cards";

const Work = () => {
  const { error, isPending, data} = useFetch('http://localhost:8000/work')

  Scroller();

  return (
    <div id="main" className="main container-fluid justify-content-center">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Cards data={data} /> }
    </div>
  );
}
 
export default Work;