import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
useNavigate
function Det() {
    
    const [data,setData]=useState({})
    let id=useParams()
     
    function getData(){
       axios.get(`https://fakestoreapi.com/products/${id.id}`)
       .then((res)=>
          { setData(res.data)}
       )
     console.log(data)
    }

    useEffect(()=>{
       getData()
    },[])

    function Cart(){
        axios.post('https://656dfc31bcc5618d3c245b4a.mockapi.io/Users',{
            myId:localStorage.getItem('id'),
            image:data.image,
            title:data.title,
            price:data.price,
            quantity:data.rating.count
        })
        .then()
    }

  return (
  
    <div key={data.id}>
        <div class="bg-white rounded-lg shadow-xl p-8 w-96 h-fit">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-[30rem]" src={data.image} alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4"><p>{data.title}</p></h3>
                <p class="text-gray-500 text-sm mt-2">{data.description}</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">{data.price}$</span>
                    <button onClick={(()=>Cart(data.id))} class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Det