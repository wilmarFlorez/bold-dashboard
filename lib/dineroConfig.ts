import Dinero from 'dinero.js'

export const createMoney = (amount: number): Dinero.Dinero => {
  const dinero: Dinero.Dinero = Dinero({
    amount,
    currency: 'COP',
    precision: 0,
  })

  return dinero
}

export const formatMoneyNumbersOnly = (money: Dinero.Dinero) => {
  if (money.getAmount() === 0) return '0'
  
  return money.setLocale('es-CO').toFormat('0,000').replace(',', '.')
}

export const formatMoney = (money: Dinero.Dinero) => {
  const formatedMoney = `$ ${formatMoneyNumbersOnly(money)}`

  return formatedMoney
}
