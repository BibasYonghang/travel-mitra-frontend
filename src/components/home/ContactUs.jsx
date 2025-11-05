import { LocateIcon, LocationEditIcon, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaAddressCard } from 'react-icons/fa'

export default function ContactUs() {
    const iconClass = "inline mb-1 mr-1 text-green-600"
    const divClass = 'text-gray-700 py-5 text-base'
    return (
        <>
            <div className='py-7  md:px-10 px-5 '>
                <h1 className='font-bold mb-5 text-green-600
                md:text-4xl text-3xl'>Contact <span className='text-black'>Us</span> </h1>

                <div className='grid md:grid-cols-3  grid-cols-1'>
                    <div className={divClass}>
                        <Mail size={18} className={iconClass} /><span className='font-bold'>Email</span>
                        <p>travelmitra@gmail.com</p>
                    </div>
                    <div className={divClass}>
                        <Phone size={18} className={iconClass} /><span className='font-bold'>Phone</span>
                        <p>Bibas Yonghang: <a href="">9898192296</a></p>

                    </div>

                    <div className={divClass}>
                        <MapPin size={18} className={iconClass} /><span className='font-bold'>Address</span>
                        <p>Kathmandu, Nepal</p>

                    </div>
                </div>

            </div >

        </>
    )
}
