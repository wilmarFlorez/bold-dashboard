'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import Icon from '../icon/icon'
import clsx from 'clsx'
import { AllIconNames } from '@/constants/icon-names'

type DropdownOption = {
  name: string
  label: string
}

interface FilterDropdownProps {
  options: DropdownOption[]
  onSelectOption: (option: DropdownOption) => void
  selectedOptions: DropdownOption[]
  disabledButton: boolean
}

export const FilterDropdown = ({
  onSelectOption,
  options,
  disabledButton,
  selectedOptions,
}: FilterDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleCheckboxChange = (option: DropdownOption) => {
    onSelectOption(option)
  }

  const handleToggleDropdown = () => setShowDropdown((prevState) => !prevState)

  const icon = showDropdown
    ? {
        name: 'icon_close',
        width: 14,
        height: 22,
      }
    : {
        name: 'icon_filter',
        width: 23,
        height: 23,
      }

  return (
    <div className='flex justify-end mt-4 relative'>
      <div className='flex flex-col w-full'>
        <Button
          onClick={handleToggleDropdown}
          className={clsx(
            'bg-white shadow-sm flex gap-2 font-bold pl-8 text-blue md:self-end',
            {
              'w-full md:w-60': showDropdown,
              'rounded-b-none': showDropdown,
            }
          )}
        >
          <div className='flex-1'>Filtrar</div>
          <div className='self-end justify-center items-center'>
            <Icon
              name={icon.name as AllIconNames}
              width={icon.width}
              height={icon.height}
              color='blue'
            />
          </div>
        </Button>
        <div
          className={clsx(
            'flex flex-col bg-white rounded-sm shadow-md p-3 gap-3 md:absolute top-10 z-50 md:w-60 right-0',
            {
              hidden: !showDropdown,
              'rounded-t-none': showDropdown,
            }
          )}
        >
          {options.map((option) => {
            return (
              <div className='flex gap-2 cursor-pointer' key={option.name}>
                <Checkbox
                  id={option.name}
                  className='w-4 h-4'
                  onCheckedChange={() => handleCheckboxChange(option)}
                  checked={selectedOptions.some(
                    (item) => item.name === option.name
                  )}
                />
                <div className='grid gap-1.5 leading-none cursor-pointer'>
                  <label
                    htmlFor={option.name}
                    className='text-sm font-medium text-blue cursor-pointer'
                  >
                    {option.label}
                  </label>
                </div>
              </div>
            )
          })}
          <Button
            className='bg-red text-light-gray rounded-2xl mt-2'
            disabled={disabledButton}
            onClick={handleToggleDropdown}
          >
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  )
}
