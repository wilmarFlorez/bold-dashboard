import Dinero from 'dinero.js'
import { OptionTime } from '@/components/time-filter/time-filter'
import { OptionKey, TimeOption } from './constants'
import {
  getCurrentFormatedDate,
  getDateObject,
  getEndOfDay,
  getEndOfMonth,
  getEndOfWeek,
  getStartOfDay,
  getStartOfMonth,
  getStartOfWeek,
} from '@/lib/formatDate'
import { Transaction } from '@/hooks/transactions/types'
import { createMoney } from '@/lib/dineroConfig'

export const normalizeTimeLabel = (selectedTime: OptionTime): string => {
  const normalizedTimeLabel =
    selectedTime.key === OptionKey.DAY || selectedTime.key === OptionKey.WEEK
      ? selectedTime.label.toLowerCase()
      : selectedTime.label

  return normalizedTimeLabel
}

export const getStatDate = (selectedTime: OptionTime): string => {
  const { month, year } = getDateObject()

  const monthYearDate = `${month}, ${year}`

  const formatedDate =
    selectedTime.key === OptionKey.DAY
      ? getCurrentFormatedDate()
      : selectedTime.key === OptionKey.MONTH
      ? monthYearDate
      : ''

  return formatedDate
}

export const sumTransactionAmounts = (
  transactions: Transaction[]
): Dinero.Dinero => {
  return transactions.reduce((total, transaction) => {
    return total.add(transaction.amount)
  }, createMoney(0))
}

export const filterTransactionsByTime = (
  transactions: Transaction[],
  selectedTime: TimeOption
): Transaction[] => {
  const start: Date =
    selectedTime.key === OptionKey.DAY
      ? getStartOfDay()
      : selectedTime.key === OptionKey.WEEK
      ? getStartOfWeek()
      : getStartOfMonth()

  const end: Date =
    selectedTime.key === OptionKey.DAY
      ? getEndOfDay()
      : selectedTime.key === OptionKey.WEEK
      ? getEndOfWeek()
      : getEndOfMonth()

  return transactions.filter((transaction) => {
    const createdAtDate = new Date(transaction.createdAt)
    return createdAtDate >= start && createdAtDate <= end
  })
}
