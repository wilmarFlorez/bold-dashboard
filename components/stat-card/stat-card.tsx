'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
interface StatCardProps {
  title: string
  value: string
  date: string
  icon: React.ReactNode
}

export const StatCard = ({ title, value, date, icon }: StatCardProps) => {
  const [openTooltip, setOpenTooltip] = useState(false)

  const handleClickInfo = () => {
    setOpenTooltip((prevState) => !prevState)
  }

  return (
    <Card className='shadow-md border-none rounded-2xl overflow-hidden'>
      <CardHeader className='bg-blue-500 bg-main-gradient text-light-gray'>
        <div className='flex justify-between'>
          <CardTitle className='font-normal text-base'>{title}</CardTitle>
          <TooltipProvider>
            <Tooltip open={openTooltip}>
              <TooltipTrigger onClick={handleClickInfo}>{icon}</TooltipTrigger>
              <TooltipContent className='bg-white text-dark-gray'>
                <p className='text-xs'>Resumen de ventas</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className='bg-white pt-5 pb-2 px-2 flex flex-col gap-2'>
        <div className='text-center font-bold text-2xl'>
          <span>{value}</span>
        </div>
        <div className='text-center'>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
