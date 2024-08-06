import { AllIconNames } from '@/constants/icon-names'
import { PaymentMethod } from '@/services/transactions/types'

type IconObject = {
  name: AllIconNames
  width: number
  height: number
}

export const getPaymentMethodIcon = (
  paymentMethod: PaymentMethod
): IconObject => {
  const paymentMethodIcons: Record<PaymentMethod, IconObject> = {
    BANCOLOMBIA: {
      name: 'icon_bancolombia',
      width: 20,
      height: 20,
    },
    CARD: {
      name: 'icon_other_payment',
      width: 20,
      height: 20,
    },
    DAVIPLATA: {
      name: 'icon_daviplata',
      width: 23,
      height: 23,
    },
    NEQUI: {
      name: 'icon_nequi',
      width: 30,
      height: 30,
    },
    PSE: {
      name: 'icon_pse',
      width: 23,
      height: 23,
    },
  }

  const paymentMethodIcon = paymentMethodIcons[paymentMethod]
  const defaulIcon: IconObject = {
    name: 'icon_other_payment',
    width: 22,
    height: 22,
  }

  return paymentMethodIcon ? paymentMethodIcon : defaulIcon
}
