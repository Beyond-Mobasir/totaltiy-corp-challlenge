"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Property } from "../../types/property";

interface PropertyCardProps {
   property: Property
}


export function PropertyCard({ property }: PropertyCardProps) {

   return (
      <CardContainer className="inter-var">
         <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
               translateZ="0"
               className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               {property.name}
            </CardItem>
            <CardItem
               as="p"
               translateZ="0"
               className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
               {property.city}
            </CardItem>
            <CardItem translateZ="20" className="w-full mt-4">
               <Image
                  src={`/img/property/${property.image}`}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
               />
            </CardItem>
            <CardItem>{property.price}</CardItem>
            <div className="flex justify-between items-center mt-20">
               <CardItem
                  translateZ={0}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
               >
                  Book Now
               </CardItem>
            </div>
         </CardBody>
      </CardContainer>
   );
}
