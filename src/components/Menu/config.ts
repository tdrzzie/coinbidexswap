import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://sniperswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Create BEP20 Token',
    icon: 'TicketIcon',
    href: 'https://forms.gle/Na1Vv7Y8bpYMP9p9A',
  },
  /*
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://mozartfinance.io/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mozartfinance',
      },
      {
        label: 'Docs',
        href: 'https://mozartfinance.gitbook.io/mozart-finance/',
      },
      {
        label: 'Blog',
        href: 'https://mozart-finance.medium.com/',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: 'https://github.com/ImmuneBytes/Smart-Contract-Audit-Reports/blob/main/Mozart%20Finance/Mozart%20Finance%20(PIANO)%20-%20Final%20Audit%20Report.pdf',
  }, */
]

export default config
