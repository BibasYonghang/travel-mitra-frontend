import { LocateIcon, LocationEditIcon, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaAddressCard } from 'react-icons/fa'

export default function ContactUs() {
    return (
        <>
            <div className='px-5  '>
                <h1 className='text-2xl text-gray-700 font-bold'>Contact <span className='text-blue-600'>Us</span> </h1>
                <div className=' text-gray-700 py-5'>
                    <Mail size={18} className='inline mb-1 mr-1' /><span className='font-bold'>Email</span>
                    <p>travelmitra@gmail.com</p>

                </div>
                <div className=' text-gray-700 py-5'>
                    <Phone size={18} className='inline mb-1 mr-1' /><span className='font-bold'>Phone</span>
                    <p>Bibas Yonghang: <a href="">9898192296</a></p>

                </div>

                <div className=' text-gray-700 py-5'>
                    <MapPin size={18} className='inline mb-1 mr-1' /><span className='font-bold'>Address</span>
                    <p>Kathmandu, Nepal</p>

                </div>

            </div>

        </>
    )
}
