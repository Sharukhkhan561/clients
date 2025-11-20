import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import Title from '../../components/owner/Title';

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY ;
  const [image, setImage]= useState(null);
  const [car, setCar]= useState({
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seating_capacity:0,
    location:'',
    discription:''

  })
  const handleSubmit=async(e)=>{
e.preventDefault();
  }
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
    <Title title='Add New Car' subTitle='Fill in the details to list  a new car for booking, including pricing, availability and car specification.'/>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
    {/* Car Image  */}
    <div className='flex items-center gap-2 w-full'>
      <label htmlFor="car-image">
        <img src={image? URL.createObjectURL(image): assets.upload_icon} className='h-14 rounded cursor-pointer' alt="" />
        <input onChange={e=>setImage(e.target.files[0])} type="file" id='car-image' accept='image/*' hidden />
      </label>
      <p className='text-sm text-gray-500'>Uplaod a picture of you car</p>
    </div>
     {/* Car Brand & Model  */}
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='flex flex-col w-full'>
         <label htmlFor="">Brand</label>
         <input type="text" value ={car.brand} onChange={e=>setCar({...car,brand:e.target.value})} placeholder='e.g. BMW, AUdi, mercedees...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' />
      </div>
      <div className='flex flex-col w-full'>
         <label htmlFor="">Model</label>
         <input type="text" value ={car.model} onChange={e=>setCar({...car,model:e.target.value})} placeholder='e.g. X5, S-class, A4....' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' />
      </div>
     </div>
        {/* Car Year price and category  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6'>
        <div className='flex flex-col w-full'>
         <label htmlFor="">Year</label>
         <input type="number" value ={car.year} onChange={e=>setCar({...car,year:e.target.value})} placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' />
      </div>
      <div className='flex flex-col w-full'>
         <label htmlFor="">Daily Price ({currency})</label>
         <input type="number" value ={car.pricePerDay} onChange={e=>setCar({...car,pricePerDay:e.target.value})} placeholder='e.g. X5, S-class, A4....' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' />
      </div>
      <div className='flex flex-col w-full'>
         <label htmlFor="">Category</label>
         <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e=>steCar({...car, category:e.target.value})} value={car.category}>
          <option value="">Select a Category</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="HatchBack">HatchBack</option>
         </select>
      </div>
        </div>
        {/* Car Transmission , fuel type , seating capacity */}
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6'>

        <div className='flex flex-col w-full'>
         <label htmlFor="">Transmission</label>
         <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e=>setCar({...car, transmission:e.target.value})} value={car.transmission}>
          <option value="">Select a Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
          <option value="Semi-Automatic">Semi-Automatic</option>
         </select>
      </div>

      <div className='flex flex-col w-full'>
         <label htmlFor="">Fuel Type</label>
         <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e=>steCar({...car, fuel_type:e.target.value})} value={car.fuel_type}>
          <option value="">Select a Fuel Type</option>
          <option value="CNG">CNG</option>
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
         </select>
      </div>

      <div className='flex flex-col w-full'>
         <label htmlFor="">Seating Capacity</label>
         <input type="number" value ={car.seating_capacity} onChange={e=>setCar({...car,seating_capacity:e.target.value})} placeholder='4' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' />
      </div>
      </div>
   {/* Car location  */}
   <div className='flex flex-col w-full'>
   <label htmlFor="">Location</label>
         <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e=>steCar({...car, location:e.target.value})} value={car.location}>
          <option value="">Select a Fuel Type</option>
          <option value="Delhi">Delhi</option>
          <option value="Noida">Noida</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
          <option value="Hyderabad">Hyderabad</option>
         </select>
   </div>

   {/* Car Description  */}
   <div className='flex flex-col w-full'>
         <label htmlFor="">Description</label>
         <textarea rows ={5} placeholder='e.g A luxurious SUV with a spacious interior and a powerful engine.'
         required className='px-3 py-2 mt-1 border boder-borderColor rounded-md outline-none' value ={car.description} onChange={e=>setCar({...car,description:e.target.value})}  >
         </textarea>
      </div>
      <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
        <img src={assets.tick_icon} alt="" />
        List Your Car
      </button>
    </form>

    </div>
  )
}

export default AddCar