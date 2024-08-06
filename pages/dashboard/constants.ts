import { getDateObject } from '@/lib/formatDate'

enum Key {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
}

type TimeOption = {
  key: Key
  label: string
}

type TimeOptions = TimeOption[]

const currentMonth = getDateObject().month

export const TIME_OPTIONS: TimeOptions = [
  { key: Key.DAY, label: 'Hoy' },
  { key: Key.WEEK, label: 'Esta semana' },
  { key: Key.MONTH, label: currentMonth },
]
