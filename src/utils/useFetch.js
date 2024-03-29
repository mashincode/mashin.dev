import { useState, useEffect } from 'react';

const useFetch = (url) => {

  console.log(url);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then((data) => {
      // await setTimeout(()=>setIsPending(false), 1000);
      // await setTimeout(()=>setData(data), 1000);
      // await setError(null);
      setIsPending(false)
      setData(data)
      setError(null);
    })
    .catch(err => {
      if (String(err.name) !== 'AbortError') {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
      }
    })


    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;