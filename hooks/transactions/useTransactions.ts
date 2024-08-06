import { useEffect, useState } from 'react'
import { ApiResponse, Transaction } from './types'
import apiClient from '../apiClient'

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTransactions = async () => {
    try {
      const { data } = await apiClient.get<ApiResponse>('')
      setTransactions(data.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return { transactions, loading, error, refetch: fetchTransactions }
}

export default useTransactions