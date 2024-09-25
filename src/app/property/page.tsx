import React from 'react'
import { PropertyData } from "../api/data/data.json"
import { PropertyCard } from '@/components/property-card'
import MainWrapper from '@/components/ui/main-wrapper'

export default function ProductPage() {
   return (
      <div className='w-full h-full bg-gray-50'>
         <MainWrapper className='text-black dark:text-white'>
            Property List
         </MainWrapper>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 transition-all duration-75'>
            {PropertyData.map((property) => (
               <PropertyCard key={property.id} property={property} />
            ))}
         </div>
      </div>
   )
}

