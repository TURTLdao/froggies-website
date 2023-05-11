//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const MobileNav = () => (
<nav className="mobile-nav">
  <ul>
    <li style={{ color: "#1d1d1d"}}>
      <Link href="/">
          Home
      </Link>
    </li>
    <li style={{ color: "#1d1d1d"}}>
      <Link href="#About">
        About 
      </Link>
    </li>
    <li style={{ color: "#1d1d1d"}}>
      <Link href="#Tokenomics">
        Tokenomics
      </Link>
    </li>
    <li style={{ color: "#1d1d1d"}}>
      <Link href="#HowToBuy">
          How To Buy
      </Link>
    </li>
    <li style={{ color: "#1d1d1d"}}>
      <Link href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945" target="_blank">
          Buy Now 
      </Link>
    </li>
  </ul>
  </nav>
);

export { MobileNav };
