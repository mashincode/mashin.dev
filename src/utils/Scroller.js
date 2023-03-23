import { useEffect } from 'react';

const Scroller = () => {
  useEffect(() => {
    if (String(window.location.pathname) !== "/"){

      document.getElementById('menu').scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

    }
  })
}
 
export default Scroller;

