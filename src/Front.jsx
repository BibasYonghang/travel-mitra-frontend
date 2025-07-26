import React from 'react'
import Map from './Map'

export default function Front() {
  return (
    <>
      <div
        className='w-full h-[75vh] px-2'>
        <img
          src="/images/travle-mitra-bg.png"
          alt=""
          className='object-cover w-full h-full object-[center_50%]'
        />

      </div>
      <Map />

    </>

  )
}
