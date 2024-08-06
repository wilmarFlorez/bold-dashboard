import { getDateObject } from '@/lib/formatDate'

export enum OptionKey {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
}

type TimeOption = {
  key: OptionKey
  label: string
}

type TimeOptions = TimeOption[]

const currentMonth = getDateObject().month

export const TIME_OPTIONS: TimeOptions = [
  { key: OptionKey.DAY, label: 'Hoy' },
  { key: OptionKey.WEEK, label: 'Esta semana' },
  { key: OptionKey.MONTH, label: currentMonth },
]
