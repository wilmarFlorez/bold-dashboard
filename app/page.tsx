import { getTransactions } from '../services/transactions/getTransactions'
import { Dashboard } from '@/pages/dashboard/dashboard'

export default async function Page() {
  const transactions = await getTransactions()
  return (
    <>
      <main className='container pt-10'>
        <Dashboard transactions={transactions} />
      </main>
    </>
  )
}
