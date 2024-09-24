import React from 'react'
import { PropertyData } from "../api/data/data.json"
import { PropertyCard } from '@/components/property-card'

export default function ProductPage() {
   return (
      <div className='grid grid-cols-2'>
         {PropertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
         ))}
      </div>
   )
}

