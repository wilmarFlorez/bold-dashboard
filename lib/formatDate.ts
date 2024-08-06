type DateObject = {
  month: string
  year: number
  day: number
}

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const padToTwoDigits = (num: number): string =>
    num.toString().padStart(2, '0')

  return `${padToTwoDigits(day)}/${padToTwoDigits(
    month
  )}/${year} - ${padToTwoDigits(hours)}:${padToTwoDigits(
    minutes
  )}:${padToTwoDigits(seconds)}`
}

export const getDateObject = (): DateObject => {
  const date = new Date()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const day = date.getDate()

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  const month = monthNames[monthIndex]

  return { month, year, day }
}

export const getCurrentFormatedDate = (): string => {
  const { day, month, year } = getDateObject()

  return `${day} de ${month} ${year}`
}

export const getStartOfDay = (): Date => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

export const getStartOfWeek = (): Date => {
  const now = new Date()
  const day = now.getDay()
  const diff = now.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(now.setDate(diff))
}

export const getStartOfMonth = (): Date => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), 1)
}

export const getEndOfDay = (): Date => {
  const now = new Date()
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999
  )
}

export const getEndOfWeek = (): Date => {
  const startOfWeek = getStartOfWeek()
  return new Date(
    startOfWeek.getFullYear(),
    startOfWeek.getMonth(),
    startOfWeek.getDate() + 6,
    23,
    59,
    59,
    999
  )
}

export const getEndOfMonth = (): Date => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999)
}
