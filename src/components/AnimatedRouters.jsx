import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Routes, useLocation } from 'react-router-dom';

const AnimatedRoutes = ({ children }) => {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    gsap.from(node, {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: 'power3.inOut',
    });
  }, [location]);

  return (
    <div ref={ref}>
      <Routes location={location}>{children}</Routes>
    </div>
  );
};

export default AnimatedRoutes;
