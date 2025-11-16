import React, { useState } from 'react'
import { FaServer } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xl mx-auto p-12 shadow'>
        <div onClick={()=>('/')} className='flex items-center justify-center gap-2 mb-12 mx-auto cursor-pointer'>
          <FaServer className='text-primary text-2xl'/>
          <span className='text-3xl text-dark font-bold'>Elithosting</span>
          </div>
          <h1 className='text-3xl text-dark font-bold text-center'>
           {isLogin ? "Sign in" : "Sign up"}
            </h1>

             {/*  Full Name */}

             {
              !isLogin &&
               <div className='mb-4 '>
            <label className='block text-dark/80'>Full Name</label>
            <input className='w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:dark/50'placeholder='Enter your Name' type="text" />
          </div>
             }

           {/*  Email Field */}

          <div className='mb-4 '>
            <label className='block text-dark/80'>Email I'D</label>
            <input className='w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:dark/50'placeholder='Enter email' type="text" />
          </div>
          

            {/*  Password Field */}

             <div className='mb-4 '>
            <label className='block text-dark/80'>Password</label>
            <input className='w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:dark/50'placeholder='Enter password' type="text" />
          </div>

           {
            !isLogin && 
           <div className='mb-4 '>
            <label className='block text-dark/80'>Confirm Password</label>
            <input className='w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:dark/50'placeholder='Enter confirm password' type="text" />
          </div>
           }

           {/*  Forget and Remember Field */}
           {isLogin &&
           <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <input className='h-4 w-4 rounded' type="checkbox" />
              <span>Remember Me</span>
            </div>
            <a className='text-primary hover:underline font-semibold' href="#">
              Forget Password
            </a>
           </div>
               }

               {/*  Login Button */}
               <button className='w-full bg-primary text-white font-semibold px-6 py-2.5 rounded cursor-pointer'>Login</button>
               <p className='text-dark font-semibold text-center mt-2'>
                {isLogin ? " Have no account yet?" : "you alreay have an Account"}
               
                <span onClick={()=>setIsLogin(!isLogin)} className='text-primary font-bold hover:underline cursor-pointer ml-2'>
                 {isLogin ? "Sign up" : " Login"}
                  </span>
                </p>

      </div>
    </div>
  )
}

export default auth