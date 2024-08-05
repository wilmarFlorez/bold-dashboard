'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Transaction, PaymentMethod } from '../../services/transactions/types'

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'status',
    header: 'Transacción',
  },
  {
    accessorKey: 'createdAt',
    header: 'Fecha y hora',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de pago',
    cell: ({ row }) => {
      console.log('ROW', row)
      const paymentMethod = String(row.getValue('paymentMethod'))
      const transactionReference = `****${row.original.transactionReference}`

      const paymentMethodLabel =
        paymentMethod === PaymentMethod.PSE
          ? paymentMethod
          : transactionReference

      return <div>{paymentMethodLabel}</div>
    },
  },
  {
    accessorKey: 'id',
    header: 'ID Transacción Bold',
  },
  {
    accessorKey: 'amount',
    header: 'Monto',
  },
]
