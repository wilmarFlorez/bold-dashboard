import { getDateObject } from '@/lib/formatDate'

export enum OptionKey {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
}

export type TimeOption = {
  key: OptionKey
  label: string
}

type TimeOptions = TimeOption[]

export type DropdownOption = {
  name: string
  label: string
}

type DropdownOptions = DropdownOption[]

const currentMonth = getDateObject().month

export const TIME_OPTIONS: TimeOptions = [
  { key: OptionKey.DAY, label: 'Hoy' },
  { key: OptionKey.WEEK, label: 'Esta semana' },
  { key: OptionKey.MONTH, label: currentMonth },
]

export const DROPDOWN_OPTIONS: DropdownOptions = [
  {
    name: 'option1',
    label: 'Cobro con datáfono',
  },
  {
    name: 'option2',
    label: 'Cobro con link de pago',
  },
  {
    name: 'option3',
    label: 'Ver todos',
  },
]