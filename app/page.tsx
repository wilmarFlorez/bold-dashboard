import { StatCard } from '@/components/stat-card/stat-card'
import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <header className='top-3 z-20 flex items-center justify-between bg-red-400 px-[5%] py-5 xl:px-12'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/assets/icons/logo.svg'
            width={79}
            height={48}
            alt='Bold'
            className='h-12 w-fit'
          />
        </Link>
        <div className='flex gap-5'>
          <Link href='/business'>Mi negocio</Link>
          <Link href='/help'>Ayuda</Link>
        </div>
      </header>
      <main className='mx-auto flex max-w-7xl flex-col space-y-14'>
        <section>
          <StatCard />
        </section>
        <section></section>
      </main>
    </>
  )
}
