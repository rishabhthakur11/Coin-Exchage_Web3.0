import React, { useState, useContext, useEffect, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'

const CMCTable = () => {
  let { getToptenCoins } = useContext(CoinMarketContext)
  const [coinData, setCoinData] = useState(null)
  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()
      let filteredResponse = []

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i]
        if (element.cmc_rank <= 10) filteredResponse.push(element)
      }

      setCoinData(filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])

  return <div></div>
}

export default CMCTable
