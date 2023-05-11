//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const DesktopNav = () => (
<nav className="desktop-nav">
  <ul>
    <li>
      <Link href="/">
          Home
      </Link>
    </li>
    <li>
      <Link href="#About">
        About 
      </Link>
    </li>
    <li>
      <Link href="#Tokenomics">
        Tokenomics
      </Link>
    </li>
    <li>
      <Link href="#HowToBuy">
          How To Buy
      </Link>
    </li>
    <li className="ChartBtn">
      <Link href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945" target="_blank">
          Buy Now 
      </Link>
    </li>
  </ul>
  </nav>
);

export { DesktopNav };
