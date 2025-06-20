import React, { use, useEffect, useState } from 'react'
import HotjobCard from '../Shared/HotjobCard'

const Hotjobs = () => {
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then((res)=>res.json())
        .then((data)=>setJobs(data))
    },[])
    
  return (
    <div>
        <h2 className='text-4xl text-center m-6'>Hot jobs of the day</h2>
        <div className='grid gap-4 p-4 grid-cols-1 lg:grid-cols-3'>
            {jobs.map(job=><HotjobCard key={Math.random()} job={job}></HotjobCard>)}
        </div>
    </div>
  )
}

export default Hotjobs
