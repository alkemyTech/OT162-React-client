import axios from 'axios';
import React, { useEffect} from 'react'
import { errorAlert } from '../../features/alerts/alerts';

const DebounceSearch = ({query,setQuery,  setResult, setLoading}) => {
 
  const baseRoute =  `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_MEMBERS}`



  useEffect(() => {
   
    if (  query.length == 0) {
     
      setLoading(true);
      axios
        .get(baseRoute)
        .then((res) => {
          setResult(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setResult({ message: err.toString(), severity: "error" });
          errorAlert(err, "Invalid request", "Exit");
          setLoading(false);
        });
    } else {
      setLoading(true);
      const delayDebounceFn = setTimeout(() => {
        axios
          .get(`${baseRoute}?search=${query}`)
          .then((res) => {
            setResult(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            setResult({ message: err.toString(), severity: "error" });
            errorAlert(err, "Invalid request", "Exit");
            setLoading(false);
          });
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [query]);
  
  return (
    <div >
      <input type="text" name="search" onChange={(e)=>{
        setQuery(e.target.value);
      }} value={query} placeholder="Search by name.."
      style={{borderRadius: '4px',
              padding: '11px 10px',
              marginLeft: '15px',
              border:'1px solid #c4c4c4',
              outline: 'none'
            }}
           />
    </div>

 
  )
}

export default DebounceSearch