import apiClient from '../apiClient'
import { ApiResponse, Transaction } from './types'

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const { data } = await apiClient.get<ApiResponse>('')
    return data.data
  } catch (error) {
    throw error
  }
}
