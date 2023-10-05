"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <div className='bg-[#FFF]'>

      <p className="font-satoshi text-[#1A1A1A] text-[3rem] font-[700] leading-[3.375rem] w-[50rem] text-center mx-auto">
        Simplify Your International Transactions with 
        <span className="bg-gradient-to-r from-[#6364FF] from-[64.58%] to-[#563ACC] to-[100%] text-transparent bg-clip-text"> One Platform</span>
      </p>
      <p className="font-satoshi text-[#3A3A3A] text-[1.125rem] font-[400] leading-normal w-[37.5rem] text-center mx-auto mt-4">
        Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.
      </p>

      <div className="flex items-center justify-center mt-10 relative w-[21.875rem] mx-auto">
        <PhoneInput
          placeholder="Enter phone number"
          value={'+234'}
          onChange={setValue}
        />
        <button className="absolute font-satoshi text-[#FFF] text-[.75rem] font-[500] leading-normal rounded-[1.5rem] bg-[#563ACC] w-[7.8125rem] h-6 right-1">Download Now</button>
        <style>{`
          .react-tel-input .form-control {
            border-radius: 1.5rem;
            width: 21.875rem;
            height: 2rem;
            border-color: rgba(148, 148, 148, 0.5);
          }
          .react-tel-input .selected-flag {
            width: 0rem;
            padding: 0 0;
            left: .625rem;
          }
          .react-tel-input .flag-dropdown {
            border: none;
          }
        `}</style>
      </div>

      <div className='mt-[9.25rem]'>
        <Image className='mx-auto' src='/assets/images/iPhone.png' width={1400} height={340} alt='' />
      </div>

      <div className='h-[9.6875rem] bg-[#E5DBFB] px-[6%]'>
        
      </div>

      <div className='mt-[7rem] px-[6%]'>
        <p className='font-satoshi font-[700] font-[.875rem] leading-normal bg-gradient-to-r from-[#6364FF] from-[64.58%] to-[#563ACC] to-[100%] text-transparent bg-clip-text text-center'>Cross-Border Transactions</p>
        <p className="font-satoshi text-[#1A1A1A] text-[2.5rem] font-[700] leading-[3rem] w-[37.5rem] text-center mx-auto mt-4">
          Say Goodbye to International Payment Hassles 
        </p>
        <p className="font-satoshi text-[#3A3A3A] text-[1.125rem] font-[400] leading-normal w-[37.5rem] text-center mx-auto mt-4">
          Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store.
        </p>
      </div>

      <div className='mt-[7rem] px-[6%]'>

      </div>

    </div>
  )
}
