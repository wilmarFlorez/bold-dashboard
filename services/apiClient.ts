import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://bold-fe-api.vercel.app/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
