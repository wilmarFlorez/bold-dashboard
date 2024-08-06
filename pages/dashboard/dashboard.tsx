'use client'

import Icon from '@/components/icon/icon'
import { StatCard } from '@/components/stat-card/stat-card'
import { columns } from '@/components/table/columns'
import { HeaderTable } from '@/components/table/components/header-table'
import { DataTable } from '@/components/table/data-table'
import { OptionTime, TimeFilter } from '@/components/time-filter/time-filter'
import {
  DROPDOWN_OPTIONS,
  DropdownOption,
  TIME_OPTIONS,
  TimeOption,
} from './constants'
import React, { useEffect, useState } from 'react'
import {
  filterTransactionsByTime,
  getStatDate,
  normalizeTimeLabel,
  sumTransactionAmounts,
} from './helpers'
import useTransactions from '@/hooks/transactions/useTransactions'
import { FilterDropdown } from '@/components/filter-dropdown/filter-dropdown'
import { formatMoney } from '@/lib/dineroConfig'

export const Dashboard = () => {
  const { transactions, loading } = useTransactions()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<TimeOption>(TIME_OPTIONS[0])
  const [selectedFilters, setSelectedFilters] = useState<DropdownOption[]>([])

  useEffect(() => {
    const savedFilters = localStorage.getItem('selectedFilters')
    if (savedFilters) {
      setSelectedFilters(JSON.parse(savedFilters))
    }
  }, [])

  useEffect(() => {
    if (selectedFilters.length > 0)
      localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters))
  }, [selectedFilters])

  const handleSelectTime = (selectedOption: OptionTime) => {
    setSelectedTime(selectedOption as TimeOption)
  }

  const handleSelectFilters = (selectedOption: DropdownOption) => {
    setSelectedFilters((prev) =>
      prev.some((item) => item.name === selectedOption.name)
        ? prev.filter((item) => item.name !== selectedOption.name)
        : [...prev, selectedOption]
    )
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase())
  }

  const filteredTransactionsByTime = filterTransactionsByTime(
    transactions,
    selectedTime
  )

  const filteredTransactions = filteredTransactionsByTime.filter(
    (transaction) => {
      const matchesSearchQuery = Object.values(transaction).some(
        (value) => value && value.toString().toLowerCase().includes(searchQuery)
      )
      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.some((filter) => {
          if (filter.name === 'option1')
            return transaction.salesType === 'TERMINAL'
          if (filter.name === 'option2')
            return transaction.salesType === 'PAYMENT_LINK'
          return true
        })
      return matchesSearchQuery && matchesFilters
    }
  )

  const total = sumTransactionAmounts(filteredTransactionsByTime)

  const normalizedTimeLabel = normalizeTimeLabel(selectedTime)
  const statDate = getStatDate(selectedTime)

  return (
    <>
      <section className='flex space-x-4'>
        <div className='min-w-96'>
          <StatCard
            title={`Total de ventas de ${normalizedTimeLabel}`}
            date={statDate}
            icon={
              <Icon
                name='icon_info'
                width={24}
                height={24}
                color='light-gray'
              />
            }
            value={formatMoney(total)}
          />
        </div>
        <div className='flex-1'>
          <TimeFilter
            options={TIME_OPTIONS}
            selectedOption={selectedTime}
            onSelect={handleSelectTime}
          />
          <FilterDropdown
            options={DROPDOWN_OPTIONS}
            onSelectOption={handleSelectFilters}
            disabledButton={selectedFilters.length === 0}
            selectedOptions={selectedFilters}
          />
        </div>
      </section>
      <section className='mt-6'>
        <div>
          <HeaderTable
            title={`Tus ventas de ${normalizedTimeLabel}`}
            searchQuery={searchQuery}
            onSearch={handleSearch}
          />
          <DataTable
            data={filteredTransactions}
            columns={columns}
            loading={loading}
          />
        </div>
      </section>
    </>
  )
}
