import React from 'react'

function Nav() {
function out(){
    localStorage.clear()
}
   function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
          navToggle.item(i).classList.toggle("hidden");
        }
      };

  return (
    <nav class="flex flex-wrap items-center justify-between p-3 bg-teal-800">
   <a href="/"><img  src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" class="h-10 w-20" alt="ACME" width="120" />
   </a>  <div class="flex md:hidden">
        <button id="hamburger" onClick={(()=>toggleMenu())}>
          <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
    </div>
    <div
        class="toggle hidden w-full md:w-auto md:flex text-left text-bold mt-5 md:mt-0 border-t-2 md:border-none">
        <a href="/"
            class="block md:inline-block text-sm  py-3  w-24 md:border-none"><p className='text-white/70 '>Deliver to<span className='flex gap-1 text-white'><img src="https://static-00.iconduck.com/assets.00/location-icon-1622x2048-74cu38u8.png" className='w-3' alt="" />Saudi Arabia</span></p>
        </a>
        <div className='flex h-16 items-center justify-center mx-16'>
            <button className='bg-gray-300 rounded-s-lg p-1'>All</button>
        <input type="text" className='p-1 w-[35rem]' placeholder='Search Amazon' />
        <button className='p-1.5 bg-rose-200 rounded-e-lg' ><img className='w-5 ' src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" /></button>
        </div>
       
        <a href="/SignUp"
          onClick={out()}   class="block md:inline-block text-sm py-3  w-24 md:border-none"><p className='text-white '>Sign Out</p>
        </a>

            <div className='flex gap-2'>  
                <a href="/"
            class="block md:inline-block text-sm py-3  w-24 md:border-none"><p className='text-white '>Returns<span className='flex gap-1 text-white font-bold'>& Orders</span></p>
        </a>
        <a href="/Cart">
       <img className='w-14' src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg" alt="" />
    </a>
    
    </div>
      

    </div>
    
</nav>
  )
}

export default Nav