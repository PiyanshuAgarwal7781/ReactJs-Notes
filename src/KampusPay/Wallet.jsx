import React from 'react'
import "./Wallet.css"

export default function Wallet() {
  return (
    <div>
      <div id="mainWallet">
        <h2>Wallet</h2>
        <div id="displayWallet">
            <h3>Total Balance</h3>
            <p>$</p>
            <span><button>Add</button></span>
            <span><button>WithDraw</button></span>
        </div>
      </div>
    </div>
  )
}
