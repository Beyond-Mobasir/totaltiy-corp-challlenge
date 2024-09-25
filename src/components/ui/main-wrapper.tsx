import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface MainWrapperProps {
   className?: string
   children: ReactNode
}

export default function MainWrapper({ children, className }: MainWrapperProps) {
   return (
      <div className={cn('m-auto flex max-w-5xl items-center justify-between py-5 px-7 pl-10', className)}>
         {children}
      </div>
   )
}

