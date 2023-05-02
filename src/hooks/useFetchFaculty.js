import { onAuthStateChanged } from 'firebase/auth';
import {useState, useEffect} from 'react'
import { auth } from '../firebase/config';

export const useFetch = (url, name) => {

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
            


            } catch (error) {
              console.log(error);
              setPending(false)
            }
          }
          fetchData();
    }, [])
    return { data, pending}
} 