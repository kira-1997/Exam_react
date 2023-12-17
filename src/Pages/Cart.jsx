import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
useNavigate
function Cart() {
   const navi=useNavigate()
    const [data,setData]=useState([])
    const [img, setImg] = useState(false)
    const [idEdit, setIdEdit] = useState(null);
    const [qant,setQuant]=useState()

    function getData(){

       axios.get(`https://656dfc31bcc5618d3c245b4a.mockapi.io/Users`)
       .then((res)=>
          { setData(res.data)}
         )
     console.log(data)
    }
  
    let datas=data.filter((i)=> i.myId===localStorage.getItem('id'))
      

    useEffect(()=>{
       getData()
    },[])

    function del(id){
        axios.delete(`https://656dfc31bcc5618d3c245b4a.mockapi.io/Users/${id}`)
        .then(()=>
          getData()
        )
    }

     const save=(e)=>{
        setQuant(e.target.value)
     }
     function getQant(id){
        axios.get(`https://656dfc31bcc5618d3c245b4a.mockapi.io/Users/${id}`)
        .then((res)=>
           setQuant(res.data.quantity)
          )
     }
    function update(id){
       
        axios.put(`https://656dfc31bcc5618d3c245b4a.mockapi.io/Users/${id}`,{
            quantity:qant
        })
        .then(()=>
        getData())
    }


  return (
    <div>
           <div class="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
    <div class="px-4 py-2 border-b border-gray-200">
        <h2 class="font-semibold text-gray-800">Shopping Cart</h2>
    </div>
         {datas.map((items)=>
     
    <div class="flex flex-col divide-y divide-gray-200">
        <div class="flex items-center py-4 px-6">
            <img class="w-16 h-16 object-cover rounded" src={items.image} alt="Product Image"/>
            <div class="ml-3">
                <h4 class="text-gray-900 font-semibold">{items.title}</h4>
                <p class="text-gray-700 mt-1">Price: {items.price}$</p>
                {img?
                    <div>
    <input className = 'rounded-xl  border p-2' onChange = {save} name = 'qant' value = {qant}
                       style = {{display: idEdit == items.id ? 'block' : 'none' }}/> 
                       <button onClick = {(() =>{ update(items.id)
                                           setImg(false)
                                        } )}
                       className = ' rounded-xl p-1 ' > Update </button> 

                    </div>
              
                 :
                 <div>
                    <p class="text-gray-700 mt-1 ">Quantity: {items.quantity}</p>
                 < button className = ' mt-4 rounded-xl p-1 border-2 '
                 onClick = {() => {
                    getQant(items.id)
                    setImg(true)
                    setIdEdit(items.id) }}> Edit Quantity</button>
                 
                 </div>
                }
           
                </div>
            <button onClick={(()=>del(items.id))} class="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Remove
      </button>
        </div>
    </div>
   
     )}
    
     <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
        <h3 class="text-gray-900 font-semibold">Total: $29.98</h3>
        <button onClick={(()=>navi('/Check'))} class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
      Checkout
    </button>
    </div>
    </div>
    </div>
  )
}

export default Cart