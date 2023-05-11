//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const HowToBuy = () => (
<div id="HowToBuy" className="InnerContainer">
  <div className="HowToBuy-PrimaryContainer">
  <h2 className='strokeme'>How To Buy</h2>
  <div className="HTB-Blocks">
  <div className="HTB-Block">
      <h3 className='strokeme'>1. Create a Wallet</h3>
      <p>Download Eternl or your wallet of choice that support the Cardano blockchain $ADA.</p>
    </div>
    <div className="HTB-Block">
      <h3 className='strokeme'>2. Get Some $ADA</h3>
      <p>If you don't have any Cardano in your wallet, make sure you buy some to cover what you want to buy and fee's. Cardano, $ADA, can be bought of most exchanges.</p>
    </div>
    <div className="HTB-Block">
      <h3 className='strokeme'>3. Go to Miniswap </h3>
      <p>Connect to Miniswap. Go to app.miniswap.org in your the browser or  inside your Eternl app. Connect your wallet. Paste the $FROGGIE token address into Miniswap, select <b>FROGGIE</b>, and confirm. When Eternl prompts you for a wallet signature, sign.</p>
    </div>
  </div>
  </div>
</div>
);

export { HowToBuy };
