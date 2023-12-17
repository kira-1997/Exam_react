import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
useNavigate
function SignIn() {


    const naviagte=useNavigate()
    const [user,setUser]=useState({})
    const [use,setUse]=useState([])

    const [m,setM]=useState('')

    const handle = (e)=>{
        setUser({...user,
        [e.target.name]:e.target.value
         })}


         function check(){
             axios.get('https://fakestoreapi.com/users')
             .then((res)=>
                 setUse(res.data)
             )            
            .then(()=>{
            })
            .catch(function(err){
             console.log(err)
             })

             let val=use.find((item)=> item.username==user.name)
             if(val){
                localStorage.setItem('name',user.name)
                localStorage.setItem('id',val.id)
               naviagte('/')
             }
               


            }

  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center  sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
<img src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png" className='w-24 mx-36 my-4 ' alt="" srcset="" />      
  <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
                <p className='font-bold text-3xl mb-3'>Sign In</p>
                <label class="font-semibold text-sm  pb-1 block">Name</label>
                <input type="text" name='name' onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                <label class="font-semibold text-sm  pb-1 block">Password</label>
                <input type="text" name='password'onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                <p className='ml-2 mb-2 text-red-600 font-bold'>{m}</p>
                <button type="button" class="transition duration-200 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-700 focus:shadow-sm focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50  w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2" onClick={(()=>check())}>Continue</span>
        </button>
              <p className='text-sm mt-4'>By creating an account, you agree to Amazon's <span><a href="" className='text-blue-600'>Conditions of Use</a></span> and <span><a href="" className='text-blue-600'>Privacy Notice.</a></span> </p>
            </div>
           
            <div class="py-3 px-5">
            <p className='text-sm '>Dont have an account? <span><a href="/SignUp" className='text-blue-600'>Sign up</a></span></p> 
            <p className='text-sm '>Buying for work? <span><a href="" className='text-blue-600'>Create a free business account</a></span></p> 
            </div>
        </div>
        <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                    <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
               
            </button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SignIn