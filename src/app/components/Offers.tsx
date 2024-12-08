import React from 'react'
import Image from 'next/image';

function Offers() {
  return (
    <div className='w-full flex justify-center items-center my-10'>
        <div className='max-w-[1200px] w-full'>
            <div className='flex justify-center'>
                <h2 className='text-slate-800 font-bold sm:text-base md:text-3xl lg:text-3xl'>
                    What Shopex Offer!
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 mt-8'>
                {/* Box 1 */}
                <div className='group shadow-2xl border-2 border-gray-200 rounded-md   flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer'>
                    <Image
                    src="/free-delivery 1.png"
                    width={40}
                    height={40}
                    alt="Icon" 
                    className='text-4xl sm:text-5xl font-bold'/>
                    <p className='text-base sm:text-lg font-bold text-blue-950 mt-2 sm:mt-4'>24/7 Support</p>
                    <p className='text-sm sm:text-base font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* Box 2 */}
                <div className='group shadow-2xl border-2 border-gray-200 rounded-md  flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer'>
                    <Image
                    src="/cash.png"
                    width={40}
                    height={40}
                    alt="Icon" 
                    className='text-4xl sm:text-5xl font-bold'/>
                    <p className='text-base sm:text-lg font-bold text-blue-950 mt-2 sm:mt-4'>24/7 Support</p>
                    <p className='text-sm sm:text-base font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* Box 3 */}
                <div className='group shadow-2xl border-2 border-gray-200 rounded-md   flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer'>
                    <Image
                    src="/badge.png"
                    width={40}
                    height={40}
                    alt="Icon" 
                    className='text-4xl sm:text-5xl font-bold'/>
                    <p className='text-base sm:text-lg font-bold text-blue-950 mt-2 sm:mt-4'>24/7 Support</p>
                    <p className='text-sm sm:text-base font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* Box 4 */}
                <div className='group shadow-2xl border-2 border-gray-200 rounded-md  flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer'>
                    <Image
                    src="/call.png"
                    width={40}
                    height={40}
                    alt="Icon" 
                    className='text-4xl sm:text-5xl font-bold'/>
                    <p className='text-base sm:text-lg font-bold text-blue-950 mt-2 sm:mt-4'>24/7 Support</p>
                    <p className='text-sm sm:text-base font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers