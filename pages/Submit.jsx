import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Submit(){
    const [formData,setformData] = useState({
        email:"",
        age:20,
        student:false,
    });
    const [show,setShow]= useState(false);
    function ChangeHandler(event){
        let {name,type,value,checked} = event.target;
        setformData((prevData) => {
            return{
                ...prevData,
                [name]:(type==="checkbox") ? checked : value
            }
        });
    }

    function SubmitHandler(e){
        e.preventDefault();
        setShow(true);
        
        console.log(formData);
    }
    
    return (
        <div className='w-full px-10 bg-[#242424] text-white py-20 flex flex-col gap-10 items-center md:items-end'>
            <div className='w-full flex flex-col gap-10'>
             
            <Link href="/" className='text-blue-500 flex gap-2 text-left items-center'><FaArrowLeftLong />Back to all Category</Link>
            <h2 className='font-bold text-5xl'>Inputs</h2>

            <div className='w-full border-[1px] border-gray-500 rounded-md flex flex-col'>
                <div className='pt-6 pl-6 pb-4 bg-[#2e2e2e] text-gray-300'>
                    <h2 className='text-xl'>Your Email</h2>
                </div>
                <div className='w-full h-[1px]  bg-gray-500'></div>
                <div className='flex flex-col px-20 py-10 justify-center'>
                    <label htmlFor="email" className='text-left text-gray-300 text-lg'>Your Email</label>
                    <input type="text" className='bg-[#2e2e2e] rounded-sm px-4 py-2 text-lg w-full' onChange={ChangeHandler} value={formData.email} name="email" id="email" placeholder='Please enter your email' />
                </div>
            </div>
            <div className='w-full border-[1px] border-gray-500 rounded-md flex flex-col'>
                <div className='pt-6 pl-6 pb-4 bg-[#2e2e2e] text-gray-300'>
                    <h2 className='text-xl'>Are you a Student?</h2>
                </div>
                <div className='w-full h-[1px]  bg-gray-500'></div>
                <div className='flex flex-row px-20 py-10 justify-center gap-12 text-xl'>
                    <div className='flex flex-row items-center gap-3'>
                        <input type="checkbox" id="student" name="student" onChange={ChangeHandler} value={formData.student} className='w-5 h-5 accent-[#2e2e2e]' />
                        <label htmlFor="student">Are you a Student?</label>
                    </div>

                </div>
            </div>
            <div className='w-full border-[1px] border-gray-500 rounded-md flex flex-col'>
                <div className='pt-6 pl-6 pb-4 bg-[#2e2e2e] text-gray-300'>
                    <h2 className='text-xl'>Your Age</h2>
                </div>
                <div className='w-full h-[1px]  bg-gray-500'></div>
                <div className='flex flex-col px-20 py-10 justify-center'>

                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-white ">Your Age: <span className='pl-4'>{formData.age}</span></label>
                    <input id="age" name='age' type="range" min="0" max="100" step="1" onChange={ChangeHandler} value={formData.age} className="w-full h-2  rounded-lg appearance-none cursor-pointer bg-[#2e2e2e]"/>
                </div>
            </div>
               
            </div>
            <button className=' px-10 py-4 text-white bg-blue-600 rounded-md text-xl font-bold ' onClick={SubmitHandler}>
                Submit
            </button>
            
            <div className={`${show?"fixed inset-[1%] z-[1000] !mt-0 grid h-[98%] w-[98%] place-items-center overflow-auto text-xl bg-white bg-opacity-10 backdrop-blur-sm":"hidden"}`}>
                <div onClick={()=>setShow(false)} className='cursor-pointer text-4xl'><RxCross1 /></div>
                <div>Your Email: {formData.email}</div>
                <div>Are you a Student?: {formData.student}</div>
                <div>Your Age: {formData.age}</div>
            </div>
        </div>
    )
}


