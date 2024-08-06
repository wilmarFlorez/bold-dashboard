'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Transaction,
  PaymentMethod,
  SalesType,
} from '../../hooks/transactions/types'
import { AllIconNames } from '../../constants/icon-names'
import Icon from '../icon/icon'
import { getPaymentMethodIcon } from './constants'
import { formatDate } from '@/lib/formatDate'

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'status',
    header: 'Transacción',
    cell: ({ row }) => {
      const salesType = row.original.salesType
      const label = row.original.statusLabel

      const iconName: AllIconNames =
        salesType === SalesType.TERMINAL ? 'icon_terminal' : 'icon_link'

      return (
        <div className='flex gap-3 text-blue'>
          <div className='opacity-80 flex items-center justify-center'>
            <Icon name={iconName} width={18} height={16} color='blue' />
          </div>
          <span>{label}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Fecha y hora',
    cell: ({ row }) => {
      const createdAt = row.original.createdAt
      const formatedDate = formatDate(createdAt)
      return <p>{formatedDate}</p>
    },
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de pago',
    cell: ({ row }) => {
      const paymentMethod = String(row.getValue('paymentMethod'))
      const transactionReference = `****${row.original.transactionReference}`

      const paymentMethodLabel =
        paymentMethod === PaymentMethod.PSE
          ? paymentMethod
          : transactionReference

      const icon = getPaymentMethodIcon(paymentMethod as PaymentMethod)

      return (
        <div className='flex gap-3'>
          <Icon
            name={icon.name}
            width={icon.width}
            height={icon.height}
            color='red'
          />
          {paymentMethodLabel}
        </div>
      )
    },
  },
  {
    accessorKey: 'id',
    header: 'ID Transacción Bold',
  },
  {
    accessorKey: 'amount',
    header: 'Monto',
    cell: ({ row }) => {
      const amount = row.original.formatedAmount
      const deduction = row.original.formatedDeduction

      return (
        <div>
          <p className='text-blue text-sm'>{amount}</p>
          {deduction && (
            <div>
              <p className='text-dark-gray text-sm'>Deducción bold</p>
              <p className='text-red text-sm'> {`-${deduction}`}</p>
            </div>
          )}
        </div>
      )
    },
  },
]
