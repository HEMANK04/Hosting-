import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const contact = () => {
  return (
    <div className='py-40 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>Get in Touch</h1>
            <p className='text-xl text-dark/80'>Have question? Our team is here to Help you with any inquiries.</p>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-6'>
          <div className='w-full md:w-1/2 shadow p-12'>
          <div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-6 '>
            <div>
              <label className='block text-dark/80 mb-2 font-semibold'>First Name</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark50 placeholder:text-sm' placeholder='Enter First Name ' type="text" />
             </div>
             <div>
              <label className='block text-dark/80 mb-2 font-semibold'>Last Name</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark50 placeholder:text-sm' placeholder='Enter last Name ' type="text" />
             </div>
             <div className='mb-4 '>
               <label className='block text-dark/80 mb-2 font-semibold'>Email I'D</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark50 placeholder:text-sm' placeholder='Enter Email address ' type="text" />
             </div>
             <div className='mb-4 '>
               <label className='block text-dark/80 mb-2 font-semibold'>Subjects</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark50 placeholder:text-sm' placeholder='Enter Subjects ' type="text" />
             </div>
             <div className='mb-4 '>
               <label className='block text-dark/80 mb-2 font-semibold'>Message</label>
              <textarea className='w-full h-40 px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark50 placeholder:text-sm' placeholder='Enter Message ' type="textarea" />
             </div>
           </div>
           <button className='w-full text-center bg-primary text-white font-semibold rounded cursor-pointer py-3'>Send Message</button>
          </div>

             {/* Contact Information */}

          <div className='w-full md:w-1/2 '>
          <div className='mb-6 shadow p-12'>
            <h3 className='text-3xl text-dark font-bold'>Contact Information</h3>
            <div className='mt-6 flex items-center gap-4'>
              <div className='w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center '>
              <FaLocationDot className='text-xl text-primary cursor-pointer '/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-dark mb-0'>Address</h1>
                <p className='text-dark/80'>+85434561312 123 cloud Street,Washington DC, CA 8594</p>
              </div>
            </div>
            <div className='mt-6 flex items-center gap-4'>
              <div className='w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center '>
              <FaEnvelope className='text-xl text-primary cursor-pointer '/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-dark mb-0'>Email</h1>
                <p className='text-dark/80'>Elit@hosting.com </p>
              </div>
            </div>

            <div className='mt-6 flex items-center gap-4'>
              <div className='w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center '>
              <FaPhone className='text-xl text-primary cursor-pointer '/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-dark mb-0'>Phone</h1>
                <p className='text-dark/80'>+85434561312 </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact