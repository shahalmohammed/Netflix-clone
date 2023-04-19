
import { useEffect, useState } from 'react';
import Axios from '../../Axios/Axios'
import { apikey,imageurl } from "../../Constance/Constance";
import '../Banner/Banner.css'
function Banner() {
  const [movies,Setmovies]=useState()
  useEffect(() => {
   console.log("hello")
   Axios.get(`trending/all/day?api_key=${apikey}`).then((response)=>{
    console.log(response.data.results)
    let i=0;
    setInterval(function () {
      Setmovies(response.data.results[i])
      i++
      if(i===20){
        i=0
      }
    }, 4000);
    
   })
  }, [])
  
  return (
    <div className='Banner'>
        <img src={movies? imageurl+movies.backdrop_path:""} alt="" />
      <h2>{movies?movies.title:""}</h2>
      <div className="p">{movies?movies.overview:""}
      </div>
    </div>
  )
}

export default Banner
