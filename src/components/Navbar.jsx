import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {


// we will use navigate hook for navigate in loging page  
 const navbarr = useNavigate();

const[showMenu,setshowMenu] = useState(false); 
const[token,settoken] =useState(true);
  return (
    <div    className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navbarr(`/`)}  className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className=' hidden md:flex itmes-center justify-between gap-5'> 
        <NavLink to='/'> 
          <li className='py-1'>HOME</li>
          <hr  />
        </NavLink>
        <NavLink to='/docters'> 
          <li className='py-1'>ALL DOCTERS</li>
          <hr />
        </NavLink>
        <NavLink to='/about'> 
          <li className='py-1'>ABOUT</li>
          <hr />
        </NavLink>
        <NavLink to='/contact'> 
          <li className='py-1'>CONTACT</li>
          <hr />
        </NavLink>
      </ul> 


      {/* Create Account BTN */} 

      <div className='flex items-center gap-4'> 


        { 
          token ? 
          <div className=' flex  items-center gap-2 cursor-pointer group relative'> 
          <img  className='w-8 rounded-full' src={assets.profile_pic} alt="" />
          <img className='w-2.5' src={assets.dropdown_icon} alt="" />
               
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'> 
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ' >  
                <p onClick={()=>navbarr('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p  className='hover:text-black cursor-pointer' >My Appoinment</p>
                <p onClick={()=>settoken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>    


          </div>
          :
           <button onClick={()=>(navbarr('/login'), 
            settoken(true)
           )}  className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>

        }
        <img onClick={()=>setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
       {/* movile menu */}
       <div className={`${showMenu ? 'fixed w-full' :'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}> 
        <div className='flex items-center justify-between px-5 py-6'> 
          <img className='w-36' onClick={()=>setshowMenu(false)}  src={assets.logo} alt="" />
          <img className='w-7' onClick={()=>setshowMenu(false)} src={assets.cross_icon} alt="" />
        </div> 

        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'> 
          <NavLink onClick={()=>setshowMenu(false)} to='/'>HOME</NavLink>
          <NavLink onClick={()=>setshowMenu(false)} to='/docters'>ALL DOCTERS</NavLink>
          <NavLink onClick={()=>setshowMenu(false)} to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setshowMenu(false)} to='/contact'>CONTACT</NavLink>
        </ul>
       </div>
      </div>

    </div>
  )
}
