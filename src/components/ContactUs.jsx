import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ContactUs = () => {
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
        <Title title='Reach out to us' desc='Have questions or want to discuss your project? Get in touch with us!'/>
        <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'><img src={assets.person_icon} alt="" />
                <input type="text" placeholder='EnterYour Name'
                className='w-full p-3 text-sm outline-none' required /></div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'><img src={assets.email_icon} alt="" />
                <input type="text" placeholder='EnterYour Email'
                className='w-full p-3 text-sm outline-none 'required /></div>
            </div>
<div><p className='mb-2 text-sm font-medium'>Message</p><textarea rows={8} placeholder='Enter Your Message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/></div>
        </form>
    </div>
  )
}

export default ContactUs