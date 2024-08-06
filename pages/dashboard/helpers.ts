import { OptionTime } from '@/components/time-filter/time-filter'
import { OptionKey } from './constants'
import { getCurrentFormatedDate, getDateObject } from '@/lib/formatDate'

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
