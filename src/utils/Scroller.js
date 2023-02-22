import { useEffect } from 'react';

const Scroller = () => {
  useEffect(() => {
    if (window.location.pathname != "/"){
        window.location.href = "#menu"
    }
  })
}
 
export default Scroller;

