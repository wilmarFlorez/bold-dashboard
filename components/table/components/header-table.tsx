'use client'

import Icon from '@/components/icon/icon'
import { Input } from '@/components/ui/input'
import React from 'react'

interface HeaderTableProps {
  title: string
  searchQuery: string
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const HeaderTable = ({
  title,
  searchQuery,
  onSearch,
}: HeaderTableProps) => {
  return (
    <div>
      <div className='bg-main-gradient text-light-gray py-2 px-3 rounded-t-xl text-sm'>
        {title}
      </div>
      <div className='flex bg-white justify-center items-center px-4 gap-2 py-2'>
        <Icon name='icon_search' width={18} height={18} color='dark-gray' />
        <Input
          placeholder='Buscar'
          className='bg-white border-none'
          value={searchQuery}
          onChange={onSearch}
        />
      </div>
    </div>
  )
}
