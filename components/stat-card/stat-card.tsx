import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Icon from '../icon/icon'

interface StatCardProps {
  title: string
  value: string
  date: string
  icon: string
  label: string
}

export const StatCard = ({
  title,
  value,
  date,
  icon,
  label,
}: StatCardProps) => {
  return (
    <Card className='shadow-md border-none rounded-2xl overflow-hidden'>
      <CardHeader className='bg-blue-500'>
        <div className='flex justify-between'>
          <CardTitle>{title}</CardTitle>
          {/* <Image
            src={icon}
            height={20}
            width={20}
            alt={label}
            className='size-5 w-fit'
          /> */}
          <Icon name='icon_info' color='blue' />
        </div>
      </CardHeader>
      <CardContent>
        <div className='text-center'>
          <span>{value}</span>
        </div>
        <div className='text-center'>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
