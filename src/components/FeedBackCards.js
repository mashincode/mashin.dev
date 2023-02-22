const FeedBackCards = ({ data }) => {

  return (
      <div>
      {data.map(item => (
        <div>
          <div className="feedback">
            <h4 className="feedback-title">{item.title}</h4>
            <div className="d-flex feedback-stats">
              <div className="feedback-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <div className="feedback-stars-counter">
                <span>5.0</span>
              </div>
              <div className="feedback-date">
                {item.date}
              </div>
            </div>
            <div className="feedback-text">
              <i>{item.text}</i>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
 
  );
}
 
export default FeedBackCards;