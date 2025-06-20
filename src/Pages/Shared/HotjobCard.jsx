import React from 'react'

const HotjobCard = ({job}) => {
     const {title,location,jobType,category,description,company,company_logo}=job
  return (
   <div className="card bg-base-100 w-96 shadow-sm">
   <div className='flex'>
      <div>
        <figure>
    <img
      src={company_logo}
      alt="Shoes" />
  </figure>
 
      </div>
       <div>
     <h2 className=' text-4xl'>{company}</h2>
     <p>{location}</p>
  </div>
   </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}

export default HotjobCard
