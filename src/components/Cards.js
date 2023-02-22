const Cards = ({ data }) => {

  return (

     <div className="row cards-row">

        {data.map(item => (

          <div key={item.title} className="col-lg-4 col-sm-12">
            <div className="card">
              <img src={item.img} className="card-img-top" alt="product image" onMouseOver={e => (e.currentTarget.src = item.gif)} onMouseOut={e => (e.currentTarget.src = item.img)}/>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
 
export default Cards;