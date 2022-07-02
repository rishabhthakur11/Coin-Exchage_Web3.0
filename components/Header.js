import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const Styles = {
  header:
    'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px] items-center',
  headerWrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
  nav: 'flex justify-center items-center gap-[20px]',
  navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
  navLink: ' hidden  lg:flex text-white',
  badge:
    ' hidden lg:flex  rounded-full bg-red-500 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4',

  inputContainer: ' hidden lg:flex items-center justify-center p-2 rounded  bg-[#171924]',
  input: 'bg-transparent outline-none text-white w-70 ml-3',
}

function Header() {
  return (
    <div className={Styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="LOGO"
        width={200}
        height={200}
      />
      <div className={Styles.headerWrapper}>
        <nav className={Styles.nav}>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Cryptocurrencies</div>
            <div className={Styles.badge} />
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Exchanges</div>
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>NFT</div>
            <div className={Styles.badge} />
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Cryptown</div>
            <div className={Styles.badge} />
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Portfolio</div>
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>WatchList</div>
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Products</div>
            <div className={Styles.badge} />
          </div>
          <div className={Styles.navItem}>
            <div className={Styles.navLink}>Learn</div>
          </div>
        </nav>
        <div className="flex items-center">
          {/* Connect Button */}
          <ConnectButton />
          <div className={Styles.inputContainer}>
            {/* Search */}
            <Search />
            <input className={Styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
