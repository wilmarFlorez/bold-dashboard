'use client'

import Icon from '@/components/icon/icon'
import { StatCard } from '@/components/stat-card/stat-card'
import { columns } from '@/components/table/columns'
import { HeaderTable } from '@/components/table/components/header-table'
import { DataTable } from '@/components/table/data-table'
import { Option, TimeFilter } from '@/components/time-filter/time-filter'
import { Button } from '@/components/ui/button'
import { TIME_OPTIONS } from './constants'
import React, { useState } from 'react'

interface DasboardProps {
  transactions: any
}

export const Dashboard = ({ transactions }: DasboardProps) => {
  const [selectedTime, setSelectedTime] = useState<Option>(TIME_OPTIONS[0])

  const handleSelectTime = (selectedOption: Option) => {
    setSelectedTime(selectedOption)
  }

  return (
    <>
      <section className='flex space-x-4'>
        <div className='min-w-96'>
          <StatCard
            title='Total de ventas de Junio'
            date='Junio, 2024'
            icon={
              <Icon
                name='icon_info'
                width={24}
                height={24}
                color='light-gray'
              />
            }
            value='$ 394.561.894'
          />
        </div>
        <div className='flex-1'>
          <TimeFilter
            options={TIME_OPTIONS}
            selectedOption={selectedTime}
            onSelect={handleSelectTime}
          />
          <div className='flex justify-end mt-4'>
            <Button className='bg-white shadow-sm flex gap-1 font-bold pl-8 text-blue justify-center'>
              <span>Filtrar</span>
              <Icon name='icon_filter' width={23} height={25} color='blue' />
            </Button>
          </div>
        </div>
      </section>
      <section className='mt-6'>
        <div>
          <HeaderTable title='Tus ventas de junio' />
          <DataTable data={transactions} columns={columns} />
        </div>
      </section>
    </>
  )
}
