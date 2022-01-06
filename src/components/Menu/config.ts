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
    label: 'Premium Listing',
    icon: 'TicketIcon',
    href: 'https://forms.gle/5J1K67N4TvrxUNKz9',
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
