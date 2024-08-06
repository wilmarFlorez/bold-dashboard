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
