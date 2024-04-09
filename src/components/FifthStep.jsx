import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import imagepage5 from '../../public/images/page5.png'
import { faStar  } from '@fortawesome/free-solid-svg-icons'

const FifthStep = () => {
  return (
    <div className="flex flex-col sm:flex-row  flex-wrap items-center justify-center gap-4 sm:gap-10 lg:gap-28 sm:ml-10 sm:pl-10 sm:pr-10 mt-20 mb-10  text-xs md:text-base">
    <div className=''>
      <img src={imagepage5} alt="" className="h-40 sm:h-60" />
    </div>
    <div className="flex flex-col gap-6 p-8 items-center sm:items-start justify-center sm:w-96">
      <h1 className="text-xl md:text-2xl font-bold">
        You're on your way!
      </h1>
      <div className='text-yellow-500 text-2xl gap-1 flex'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p className="text-[8px] sm:text-[10px] md:text-[12px] max-w-[300px] font-normal sm:pr-6 sm:min-w-[450px]">
                “Through its engaging and well-structured courses, Brilliant has taught me
            mathematical concepts that | previously struggled to understand. | now feel
            confident approaching both technical job interviews and real world problem
            solving situations.”
      </p>
      <p>--jacob S.</p>
    </div>
  </div>
  )
}

export default FifthStep