import Icon from '@/components/icon/icon'
import { StatCard } from '@/components/stat-card/stat-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <header className='top-3 z-20 flex items-center justify-between bg-main-gradient -400 px-[5%] py-5 xl:px-12'>
        <Link href='/' className='cursor-pointer'>
          <Icon name='icon_logo' color='light-gray' width={79} height={28} />
        </Link>
        <nav>
          <ul className='flex gap-5 text-light-gray'>
            <li className=''>
              <Link href='/business'>Mi negocio</Link>
            </li>
            <li>
              <Link href='/help'>Ayuda ⍰</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container bg-dark-gray pt-10'>
        <section className='flex space-x-4'>
          <div className='min-w-96'>
            <StatCard
              title='Total de ventas de Junio'
              date='Junio, 2024'
              icon={
                <Icon
                  name='icon_info'
                  width={24}
                  height={24}
                  color='light-gray'
                />
              }
              value='$ 394.561.894'
            />
          </div>
          <div className='flex-1'>
            <div className='flex space-x-2 bg-white justify-between p-2 rounded-md text-blue'>
              <Button className='w-full rounded-2xl bg-light-gray '>Hoy</Button>
              <Button className='w-full rounded-2xl'>Esta semana</Button>
              <Button className='w-full rounded-2xl'>Junio</Button>
            </div>
            <div className='flex justify-end mt-4'>
              <Button className='bg-white shadow-sm flex gap-1 font-bold pl-8 text-blue'>
                <span>Filtrar</span>
                <Icon name='icon_info' width={24} height={24} color='blue' />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
