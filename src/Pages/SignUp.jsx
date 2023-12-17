import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
import axios from 'axios'
function SignUp() {
    const naviagte=useNavigate()
    const [user,setUser]=useState({})
    const [m,setM]=useState('')

    const handle = (e)=>{
        setUser({...user,
        [e.target.name]:e.target.value
         })}

         let valdEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

         function val(){
            if(user.name.length<3) {
             setM('name must be 4 char long')
             }
            else if(!valdEmail.test(user.email)){
             setM('invalid email')
             }
            else  if(user.pass.length<4){
             setM('password must be 5 char long ')
         
              }
            else if(!user.pass===user.pass2){
                setM('password dont match')

            }
            else{
            return true
            }
         
            }

         function check(){
           if(val()){
            
            fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email:user.email,
                        username:user.name,
                        password:user.pass,
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
                naviagte('/SignIn')
            }}

  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center  sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
<img src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png" className='w-24 mx-36 my-4 ' alt="" srcset="" />      
  <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
                <p className='font-bold text-3xl mb-3'>Create Account</p>
                <label class="font-semibold text-sm  pb-1 block">Your name</label>
                <input type="text" name='name' onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                <label class="font-semibold text-sm  pb-1 block">Email</label>
                <input type="text" name='email' onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                <label class="font-semibold text-sm  pb-1 block">Password</label>
                <input type="password" name='pass' onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='At least 6 characters' />
                <label class="font-semibold text-sm  pb-1 block">Re-enter password</label>
                <input type="password" name='pass2' onChange={handle} class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='At least 6 characters' />
                 <p className='ml-2 mb-2 text-red-600 font-bold'>{m}</p>
                <button type="button" class="transition duration-200 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-700 focus:shadow-sm focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50  w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2" onClick={(()=>check())}>Continue</span>
        </button>
              <p className='text-sm mt-4'>By creating an account, you agree to Amazon's <span><a href="" className='text-blue-600'>Conditions of Use</a></span> and <span><a href="" className='text-blue-600'>Privacy Notice.</a></span> </p>
            </div>
           
            <div class="py-3 px-5">
            <p className='text-sm '>Already have an account? <span><a href="/SignIn" className='text-blue-600'>Sign in</a></span></p> 
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

export default SignUp