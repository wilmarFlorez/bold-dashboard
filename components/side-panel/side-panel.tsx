'use client'

import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { Button } from '../ui/button'
import Icon from '../icon/icon'
import { Row } from '@tanstack/react-table'
import {
  PaymentMethod,
  SalesType,
  Transaction,
  TransactionStatus,
} from '@/hooks/transactions/types'
import { AllIconNames } from '@/constants/icon-names'
import { getPaymentMethodIcon } from '../table/constants'

interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  data?: Row<Transaction>
}

export const SidePanel: React.FC<SidePanelProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const transaction = data?.original

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!isOpen || !transaction) return null

  const iconName: AllIconNames =
    transaction.status === TransactionStatus.SUCCESSFUL
      ? 'icon_square_dolar'
      : 'icon_money_arrow'

  const iconPaymentType: AllIconNames =
    transaction.salesType === SalesType.TERMINAL ? 'icon_terminal' : 'icon_link'

  const paymentTypeLabel =
    transaction.salesType === SalesType.TERMINAL ? 'Datáfono' : 'Link de pagos'

  const iconPaymentMethod = getPaymentMethodIcon(
    transaction.paymentMethod as PaymentMethod
  )

  return createPortal(
    <div className='fixed inset-0 flex z-50'>
      <div
        className='fixed inset-0 bg-white opacity-70'
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          'fixed right-0 top-0 bottom-0 bg-white shadow-lg w-full max-w-xl h-full transform transition-transform duration-300 rounded-tl-2xl rounded-bl-2xl',
          {
            'translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          }
        )}
      >
        <div className='flex flex-col'>
          <Button variant='ghost' onClick={onClose} className='self-end p-6'>
            <Icon name='icon_close' width={16} height={16} color='blue' />
          </Button>

          <div className=' p-6 h-full overflow-y-auto '>
            <div className='w-full flex flex-col items-center mb-12'>
              <Icon name={iconName} width={25} height={25} color='red' />
              <p className='text-dark-gray font-semibold mt-2'>
                ¡{transaction.statusLabel}!
              </p>
              <p className='text-blue font-semibold text-2xl mt-2'>
                {transaction.formatedAmount}
              </p>
              <p className='text-dark-gray text-sm mt-2'>
                {transaction.formatedCreatedAt}
              </p>
            </div>

            <div>
              <div className='border-b-2 border-b-dark-gray pb-3 mb-3'>
                <div className='flex justify-between mb-2'>
                  <p className='text-dark-gray text-sm'>ID transacción Bold</p>
                  <p className='text-blue text-sm font-bold'>
                    {transaction.id}
                  </p>
                </div>
                {transaction.deduction && (
                  <div className='flex justify-between'>
                    <p className='text-dark-gray text-sm'>Deducción Bold</p>
                    <p className='text-sm text-red font-bold'>
                      {transaction.formatedDeduction}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <p className='text-dark-gray text-sm'>Método de pago</p>
                  <div className='flex gap-3 items-center'>
                    <Icon
                      name={iconPaymentMethod.name}
                      width={iconPaymentMethod.width}
                      height={iconPaymentMethod.height}
                      color='red'
                    />
                    <p className='text-dark-gray text-sm'>
                      ****{transaction.transactionReference}
                    </p>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <p className='text-dark-gray text-sm'>Tipo de pago</p>
                  <div className='flex gap-3 items-center'>
                    <Icon
                      name={iconPaymentType}
                      width={18}
                      height={16}
                      color='blue'
                    />
                    <p className='text-blue text-sm font-medium'>
                      {paymentTypeLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
