import React from 'react';
import DataBox from '../Components/Home/DataBox'
import {Data} from "../Data/dashboardData"
const Dashboard = () => {
  return (
    <div className='w-full space-y-5'>
      <h1 className='text-white  text-4xl font-semibold'>Welcome to dashboard!</h1>
      <div className=" flex w-full flex-wrap gap-5 justify-between" >
      {
        Data.map((data,index)=>(
          <DataBox data={data} />
        ))
        
      }
      </div>
    </div>
  )
}

export default Dashboard
