import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className=' flex flex-col items-center pt-20 text-gray-800 gap-2'>
            <h1 className=' text-2xl md:text-3xl font-medium  '>Find By Speciality</h1>
            <p className=' sm:w-1/2 text-center text-sm'>simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free </p>
            <div className=' flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link className=' flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-26 mb-2' src={item.image} />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default SpecialityMenu