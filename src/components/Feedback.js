import Scroller from "../utils/Scroller";
import useFetch from "../utils/useFetch";
import FeedBackCards from "./FeedBackCards";

const Feedback = () => {
  const { error, isPending, data} = useFetch('http://localhost:8000/feedback')

  Scroller();
  
  return (
    <div id="main" className="main container-fluid justify-content-center">
    <h2 id="scrapped-title">Scrapped from <a target="_blank" href="https://www.upwork.com/freelancers/~01c13d1cb5f087fd34" id="upwork-link">Upwork</a></h2>

    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { data && <FeedBackCards data={data} /> }
  </div>
  );
}
 
export default Feedback;