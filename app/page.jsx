"use client"
import React from 'react'
import OverviewCard from '../app/components/OverviewCard/OverviewCard'
import Heading from '../app/components/HeadingComponent/Heading'
import HomeTable from '../app/components/HomeTable/HomeTable'
import Button from './components/Button/Button'
import Bar from '../components/ui/BarChart'
import Doughnut from '../components/ui/Doughnut'
import { IconClipboardPlus, IconFlask, IconTrendingUp3, IconUsers } from '@tabler/icons-react'
const page = () => {
  return (
 <>
 <Heading>dashboard</Heading>
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-4 gap-y-6'>
 <OverviewCard
 Icon={IconUsers}
 border={'border-[#28629C]'}
 bgColor={'bg-linear-to-br from-[#F4F9FE] to-[#B0D2F9]'}
 iconBg={'bg-[#28629C]'}
 text={'total patient'}
 amount={20}
 />
  <OverviewCard
 Icon={IconUsers}
 border={'border-[#9C7D28]'}
 bgColor={'bg-linear-to-br from-[#FBF9F4] to-[#F8E8BD]'}
 iconBg={'bg-[#9C7D28]'}
 text={'old patient'}
 amount={20}
 />
  <OverviewCard
 Icon={IconUsers}
 border={'border-[#289C36]'}
 bgColor={'bg-linear-to-br from-[#E8EEE9] to-[#D2F6D6]'}
 iconBg={'bg-[#289C36]'}
 text={'new patient'}
 amount={20}
 />
   <OverviewCard
 Icon={IconTrendingUp3}
 border={'border-[#77289C]'}
 bgColor={'bg-linear-to-br from-[#FBF2FF] to-[#E4C0F5]'}
 iconBg={'bg-[#77289C]'}
 text={'Follow up'}
 amount={20}
 />
<OverviewCard
 Icon={IconClipboardPlus}
 border={'border-[#9C2828]'}
 bgColor={'bg-linear-to-br from-[#FBF3F3] to-[#FEC7C7]'}
 iconBg={'bg-[#9C2828]'}
 text={'reports'}
 amount={20}
 />
 <OverviewCard
 Icon={IconFlask}
 border={'border-[#282E9C]'}
 bgColor={'bg-linear-to-br from-[#EBECFF] to-[#BDD7FF]'}
 iconBg={'bg-[#282E9C]'}
 text={'pending'}
 amount={20}
 />
 </div>
 <section className='mt-6'>
  <div className='flex w-full justify-between items-center pb-5'>
   <Heading>today's Task</Heading>
   <Button>
    View More
   </Button>
  </div>
  <div className='grid grid-cols-12 gap-7 items-center'>
  <div className=' w-full  col-span-12  xl:col-span-8'>
  <HomeTable tableType={'home'}/>
  </div>
  <div className='bg-white w-full flex flex-col gap-y-5  rounded-2xl col-span-12 px-6 py-5 xl:col-span-4'>
   <div className='w-full  bg-gray-50 px-4 py-4'>
     <h3 className='text-lg lg:text-xl text-gray-600 font-medium'>Total Patent Of This Week</h3>
   <p className='text-sm text-gray-500'>Overview Of Patent</p>
   <Bar/>
   </div>
   <div className='flex flex-col  xl:flex-col 2xl:flex-row gap-4 w-full'>
   <div className=' w-full 2xl:w-1/2  bg-gray-50 px-4 py-4'>
   <h3 className='text-lg lg:text-xl text-gray-600 font-medium'>Patent Gender</h3>
    <div className='w-full mt-5 '>
     <Doughnut barType={'gender'}/>
    </div>
   </div>
     <div className=' w-full 2xl:w-1/2   bg-gray-50 px-4 py-4'>
    <h3 className='text-lg lg:text-xl text-gray-600 font-medium'>Patent Type</h3>
         <div className='w-full mt-5 '>
     <Doughnut barType={'type'}/>
    </div>
   </div>
   </div>
  </div>
  </div>
 </section>
 </>
  )
}

export default page
