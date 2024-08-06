'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import clsx from 'clsx'

export type Option = {
  key: string
  label: string
}

type Options = Option[]

interface TimeFilterProps {
  options: Options
  onSelect?: (selectedOption: Option) => void
  selectedOption: Option
}

export const TimeFilter = ({
  options,
  onSelect,
  selectedOption,
}: TimeFilterProps) => {
  const handleClick = (option: Option) => {
    onSelect && onSelect(option)
  }

  return (
    <div className='flex space-x-2 bg-white justify-between p-2 rounded-md text-blue'>
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
