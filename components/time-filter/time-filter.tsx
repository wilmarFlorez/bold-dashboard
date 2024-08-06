'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import clsx from 'clsx'

export type OptionTime = {
  key: string
  label: string
}

type Options = OptionTime[]

interface TimeFilterProps {
  options: Options
  onSelect?: (selectedOption: OptionTime) => void
  selectedOption: OptionTime
}

export const TimeFilter = ({
  options,
  onSelect,
  selectedOption,
}: TimeFilterProps) => {
  const handleClick = (option: OptionTime) => {
    onSelect && onSelect(option)
  }

  return (
    <div className='flex flex-col md:flex-row md:space-x-2 bg-white justify-between p-2 rounded-md text-blue'>
      {options.map((option) => (
        <Button
          key={option.key}
          className={clsx('w-full rounded-2xl', {
            'bg-light-gray': option.key === selectedOption.key,
          })}
          onClick={() => handleClick(option)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
