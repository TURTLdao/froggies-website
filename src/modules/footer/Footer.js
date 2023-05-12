//@ts-check

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Telegram } from '../Assets/Telegram';
import { Twitter } from '../Assets/Twitter';

const Footer = () => (
  <footer className="footer">
  <h2 className='strokeme'>JOIN THE POND</h2>
  <div className='HeroBtns'>
    <div>
      <Link href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945" target="_blank"> BUY NOW VIA MINISWAP</Link>
      <Link href="https://cardanoscan.io/token/79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945" target="_blank"> Cardano SCAN </Link>
    </div>
    <div>
      <Link className="circleBtn twitter" href="https://discord.gg/6KwXqWwPgC" target="_blank" >
        <img src='https://static.cdnlogo.com/logos/d/64/discord.png' />
      </Link>
      <Link className="circleBtn twitter" href="https://twitter.com/Froggieo_" target="_blank">
        <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' />
      </Link>
    </div>
  </div>
  <div className="copyright">
    <p style={{color: "#1d1d1d"}}>Copyright © 2023 $FROGGIE Community</p>
  </div>
  </footer>
);

export { Footer };
