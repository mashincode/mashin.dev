import Scroller from "../utils/Scroller";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Stack = () => {
  const cardsRef = useRef([]);

  Scroller();

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      x: '-50vh',
      duration: 1.2,
      ease: 'power3.inOut',
      stagger: {
        each: 0.2,
      },
    });
  }, []);
  
  return (
    <div className="main_scroll">
    <div id="main" className="main main_box_scroll  container-fluid justify-content-center">
      <div className="row" ref={el => cardsRef.current[0] = el} >
        <div className="col-2">
          <img src="img/stack_icons/django.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/python.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/postgresql.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/docker.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/nginx.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/redis.png" className="stack-image" alt="stack_image"/>
        </div>

        

      </div>


      <div className="row" ref={el => cardsRef.current[1] = el}>

        <div className="col-2">
          <img src="img/stack_icons/js.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/jquery.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/reactjs.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/nodejs.png" className="stack-image" alt="stack_image"/>
        </div>

      </div>

      <div className="row" ref={el => cardsRef.current[2] = el}>

        <div className="col-2">
          <img src="img/stack_icons/html5.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/css.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/bootstrap5.png" className="stack-image" alt="stack_image"/>
        </div>

      </div>


      <div className="row" ref={el => cardsRef.current[3] = el}>

        <div className="col-2">
          <img src="img/stack_icons/digitalOcean.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/aws.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/linux.png" className="stack-image" alt="stack_image"/>
        </div>

      </div>

      <div className="row" ref={el => cardsRef.current[4] = el}>

        <div className="col-2">
          <img src="img/stack_icons/git.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/gitlab-1.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/gitlab.png" className="stack-image" alt="stack_image"/>
        </div>

      </div>

      <div className="row" ref={el => cardsRef.current[5] = el}>

        <div className="col-2">
          <img src="img/stack_icons/figma.png" className="stack-image" alt="stack_image"/>
        </div>

        <div className="col-2">
          <img src="img/stack_icons/lightroom.png" className="stack-image" alt="stack_image"/>
        </div>

      </div>

      <div className="row" ref={el => cardsRef.current[6] = el}>

        <div className="col-2">
          <img src="img/stack_icons/postman.png" className="stack-image" alt="stack_image"/>
        </div>      
      </div>
    </div>
    </div>
  );
}
 
export default Stack;