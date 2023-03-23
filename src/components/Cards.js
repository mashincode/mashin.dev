import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cards = ({ data }) => {
  const cardsRef = useRef([]);

  const gifLoaded = (url) => {
    const img = new Image();
    img.onload = (e) => {
      console.log(e.target)
      console.log('loading gif');
    };

    img.src = url;
  }

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.inOut',
      stagger: {
        each: 0.2,
      },
    });
  }, []);

  useEffect(()=>{
    data.forEach(item =>{
      gifLoaded(item.gif)
    })
  }, [data])


  return (
     <div className="row cards-row">
        {data.map((item, index) => (
          <div key={item.title} className="col-lg-4 col-sm-12" ref={el => cardsRef.current[index] = el}>
            <div className="card">
              <img 
                src={item.img} 
                className="card-img-top" 
                alt="product_image" 
                loading="lazy"
                onMouseOver={e => (e.currentTarget.src = item.gif)} 
                onMouseOut={e => (e.currentTarget.src = item.img)}/>


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