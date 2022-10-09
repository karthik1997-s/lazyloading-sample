import React, { useState,useEffect} from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const  Home =()=> {
       const [data,setData] = useState(null)

       useEffect(() => {
         axios.get('https://fakestoreapi.com/products')
        .then((response)=>  setData(response.data))
         .catch(err=>console.log(err))
       
       }, [])
       
  return (
        <div className="App">
        <h1>products</h1>
        <hr></hr>
        { data &&  data.map(item=>{
         return <>
         <card >
          <div key={item.id}>
          <h4>{item.category}</h4>
         <LazyLoadImage effect ='blur'src={item.image} alt='no images' width='400px' height='500px' />
          </div>
           
           </card> 
         
          
         </>
        
                 
        })}
       </div>
  )
}

export default Home;