import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Home() {

    const [data,setData]=useState([])

   
     function getData(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>
            setData(res.data)
        )
      console.log(data)
     }

     useEffect(()=>{
        getData()
     },[])
      
    
    

     
      
  return (
    <div className='w-screen bg-gray-200 h-full'>
       <div className='grid sm:grid-cols-3 gap-3 pb-10 pt-10'>
       {data.map((items)=>
          <div key={items.id}>
               <div class="bg-white rounded-lg shadow-xl p-8 w-96 h-[45rem]">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-[30rem]" src={items.image} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <Link to={`Details/${items.id}`} class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</Link>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4"><p>{items.title}</p></h3>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">{items.price}$</span>
                </div>
            </div>
               
          </div>
        )
        }
       </div>
       

    </div>
  )
}

export default Home