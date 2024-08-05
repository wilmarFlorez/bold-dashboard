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

export type Transaction = {
  id: string
  status: TransactionStatus
  paymentMethod: PaymentMethod
  salesType: SalesType
  createdAt: number
  transactionReference: number
  amount: number
  franchise?: Franchise
  deduction?: string
}

export interface ApiResponse {
  data: Transaction[]
}
