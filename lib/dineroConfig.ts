import Dinero from 'dinero.js'

export const createMoney = (amount: number): Dinero.Dinero => {
  const dinero: Dinero.Dinero = Dinero({
    amount,
    currency: 'COP',
    precision: 0,
  })

  return dinero
}
