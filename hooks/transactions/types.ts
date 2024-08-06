import Dinero from 'dinero.js'

export enum TransactionStatus {
  SUCCESSFUL = 'SUCCESSFUL',
  REJECTED = 'REJECTED',
}

export enum PaymentMethod {
  PSE = 'PSE',
  CARD = 'CARD',
  DAVIPLATA = 'DAVIPLATA',
  BANCOLOMBIA = 'BANCOLOMBIA',
  NEQUI = 'NEQUI',
}

export enum SalesType {
  TERMINAL = 'TERMINAL',
  PAYMENT_LINK = 'PAYMENT_LINK',
}

export enum Franchise {
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

export type ResponseItem = {
  id: string
  status: TransactionStatus
  paymentMethod: PaymentMethod
  salesType: SalesType
  createdAt: number
  transactionReference: number
  amount: number
  franchise?: Franchise
  deduction?: number
}

export type Transaction = {
  id: string
  status: TransactionStatus
  paymentMethod: PaymentMethod
  salesType: SalesType
  createdAt: number
  transactionReference: number
  amount: Dinero.Dinero
  franchise?: Franchise
  deduction?: Dinero.Dinero | null
  formatedAmount: string
  formatedCreatedAt: string
  formatedDeduction: string | null
  statusLabel: string
}

export type ResponseItems = ResponseItem[]
export interface ApiResponse {
  data: ResponseItems
}
