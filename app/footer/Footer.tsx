import React from "react";
import Image from 'next/image'

const Footer = () => {
  return(
    <div className="flex flex-col pt-[54px] pb-[48px] lg:py-[72px] mt-[100px]">
      <div className="bg-[#F9F9F9] mb-[40px] flex flex-col lg:flex-row lg:mb-[54px] px-[6%] py-[72px]">
        <div className="flex flex-row w-full lg:w-2/3">
          <div className="w-full lg:w-1/3 lg:mr-[72px]">
            <p className="text-[20px] font-[700] text-[#1A1A1A] mb-[16px]">Company</p>
            <p className="text-[#3A3A3A] font-satoshi mb-[12px]">About</p>
            <p className="text-[#3A3A3A] font-satoshi mb-[12px]">Contract</p>
            <p className="text-[#3A3A3A] font-satoshi">Blog</p>
          </div>
          <div className="w-full lg:w-1/3 lg:mr-[100px]">
            <p className="text-[20px] font-[700] text-[#1A1A1A] mb-[16px]">Product</p>
            <p className="text-[#3A3A3A] font-satoshi mb-[12px]">Money conversion</p>
            <p className="text-[#3A3A3A] font-satoshi mb-[12px]">International transactions</p>
            <p className="text-[#3A3A3A] font-satoshi">International transactions</p>
          </div>
        </div>
        <div className="w-full hidden lg:w-1/3 lg:block lg:ml-[100px]">
            <p className="text-[20px] font-[700] text-[#1A1A1A] mb-[16px]">Sign up for our newsletter</p>
            <div className="relative">
              <input className="px-[24px] py-[14px] w-full rounded-[24px] border-[1px] border-[rgba(148, 148, 148, 0.50)] bg-[#FFF] border-solid" placeholder="Enter email"/>
              <button className="absolute top-[5px] right-[5px] text-[#FFF] text-[18px] font-satoshi text-center font-[500] px-[24px] py-[8px] rounded-[24px] bg-[#563ACC]">Subscribe</button>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row px-[6%]">
        <div className="flex flex-row justify-start mb-[24px]">
          <Image className="mr-[40px]" src="/assets/images/icons/ph_instagram-logo-fill.png" width={24} height={24} alt='' />
          <Image className="mr-[40px]" src="/assets/images/icons/mdi_twitter.png" width={24} height={24} alt='' />
          <Image className="mr-[40px]" src="/assets/images/icons/ic_baseline-tiktok.png" width={24} height={24} alt='' />
          <Image className="mr-[40px]" src="/assets/images/icons/carbon_logo-youtube.png" width={24} height={24} alt='' />
        </div>
        <div className="text-[#000] font-satoshi text-[14px] font-[400]">
          © 2023, FinanaceFast All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
export default Footer