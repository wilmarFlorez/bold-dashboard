import { StatCard } from '@/components/stat-card/stat-card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <header className='top-3 z-20 flex items-center justify-between bg-main-gradient -400 px-[5%] py-5 xl:px-12'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/assets/icons/logo.svg'
            width={79}
            height={48}
            alt='Bold'
            className='h-12 w-fit'
          />
        </Link>
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/business'>Mi negocio</Link>
            </li>
            <li>
              <Link href='/help'>Ayuda</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='max-w-7xl mx-auto p-4 space-y-6 bg-gray-400'>
        <section className='flex space-x-4'>
          <div className='flex-1'>
            <StatCard
              title='Total de ventas de Junio'
              date='Junio, 2024'
              icon='/assets/icons/icon_info.svg'
              value='$ 394.561.894'
              label='info'
            />
          </div>
          <div className='flex-1 bg-red-300'>
            <div className='flex space-x-2 bg-dark-gray justify-between p-2 rounded-md'>
              <Button className='w-full rounded-2xl'>Hoy</Button>
              <Button className='w-full rounded-2xl'>Esta semana</Button>
              <Button className='w-full rounded-2xl'>Junio</Button>
            </div>
          </div>
          {/*  <Button>Filtrar</Button> */}
        </section>
      </main>
    </>
  )
}
