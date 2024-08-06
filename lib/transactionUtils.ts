import { formatDate } from '@/lib/formatDate'
import { createMoney } from '@/lib/dineroConfig'
import {
  ResponseItems,
  Transaction,
  TransactionStatus,
} from '@/hooks/transactions/types'

export const transformTransactionData = (
  data: ResponseItems
): Transaction[] => {
  return data.map((item): Transaction => {
    const amountMoney = createMoney(item.amount)
    const deductionMoney = item.deduction ? createMoney(item.deduction) : null

    return {
      id: item.id,
      status: item.status,
      paymentMethod: item.paymentMethod,
      salesType: item.salesType,
      statusLabel:
        item.status === TransactionStatus.SUCCESSFUL
          ? 'Cobro exitoso'
          : item.status === TransactionStatus.REJECTED
          ? 'Cobro no realizado'
          : '--',
      createdAt: item.createdAt,
      formatedCreatedAt: formatDate(item.createdAt),
      transactionReference: item.transactionReference,
      amount: amountMoney,
      deduction: deductionMoney,
      formatedAmount: `$ ${amountMoney.getAmount()}`,
      formatedDeduction: deductionMoney
        ? `$ ${deductionMoney.getAmount()}`
        : null,
      franchise: item.franchise,
    }
  })
}
