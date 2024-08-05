import dynamic from 'next/dynamic'

interface IconPathsTypes {
  [key: string]: any
}

export const allIconsPaths: IconPathsTypes = {
  icon_info: dynamic(() => import('../assets/icons/icon_info.svg')),
  icon_logo: dynamic(() => import('../assets/icons/icon_logo.svg')),
}
