import dynamic from 'next/dynamic'

interface IconPathsTypes {
  [key: string]: any
}

export const allIconsPaths: IconPathsTypes = {
  icon_info: dynamic(() => import('../assets/icons/icon_info.svg')),
  icon_logo: dynamic(() => import('../assets/icons/icon_logo.svg')),
  icon_search: dynamic(() => import('../assets/icons/icon_search.svg')),
  icon_terminal: dynamic(() => import('../assets/icons/icon_terminal.svg')),
  icon_link: dynamic(() => import('../assets/icons/icon_link.svg')),
  icon_bancolombia: dynamic(
    () => import('../assets/icons/icon_bancolombia.svg')
  ),
  icon_mastercard: dynamic(() => import('../assets/icons/icon_mastercard.svg')),
  icon_other_payment: dynamic(
    () => import('../assets/icons/icon_other_payment.svg')
  ),
  icon_nequi: dynamic(() => import('../assets/icons/icon_nequi.svg')),
  icon_visa: dynamic(() => import('../assets/icons/icon_visa.svg')),
  icon_daviplata: dynamic(() => import('../assets/icons/icon_daviplata.svg')),
  icon_pse: dynamic(() => import('../assets/icons/icon_pse.svg')),
  icon_filter: dynamic(() => import('../assets/icons/icon_filter.svg')),
  icon_close: dynamic(() => import('../assets/icons/icon_close.svg')),
  icon_square_dolar: dynamic(
    () => import('../assets/icons/icon_square_dolar.svg')
  ),
  icon_money_arrow: dynamic(
    () => import('../assets/icons/icon_money_arrow.svg')
  ),
  icon_help: dynamic(() => import('../assets/icons/icon_help.svg')),
}
