import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Icon from '../icon/icon'

interface StatCardProps {
  title: string
  value: string
  date: string
  icon: React.ReactNode
}

export const StatCard = ({ title, value, date, icon }: StatCardProps) => {
  return (
    <Card className='shadow-md border-none rounded-2xl overflow-hidden'>
      <CardHeader className='bg-blue-500 bg-main-gradient text-light-gray'>
        <div className='flex justify-between'>
          <CardTitle className='font-normal text-base'>{title}</CardTitle>
          {icon}
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
