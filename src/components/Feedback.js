import Scroller from "../utils/Scroller";
import useFetch from "../utils/useFetch";
import FeedBackCards from "./FeedBackCards";

const Feedback = () => {
  const { error, isPending, data} = useFetch(process.env.REACT_APP_API_URL+"feedback")

  Scroller();

  if(isPending){
    return (
      <div id="main" className="main container-fluid justify-content-center">
        <div className="loading_box">Loading...</div>
      </div>
    )
  }
  
  return (
    <div id="main" className="main container-fluid justify-content-center">
      <h2 id="scrapped-title">Scrapped from <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01c13d1cb5f087fd34" id="upwork-link">Upwork</a></h2>

      { error && <div>{ error }</div> }
      { data && <FeedBackCards data={data} /> }
    </div>
  );
}
 
export default Feedback;