//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import Image from 'next/image';
import { Hamburger } from '../Assets/Hamburger';


const SiteHeader = () => {
  const [showMM, setShowMM] = useState(false);
  const toggleMM = () => setShowMM(!showMM);
  const FROGGIE_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";

  return (
    <div className="InnerContainer">
    <header>
      <div className="nav-assets">
        <img src={FROGGIE_IMG} width={100} height={100} alt="FROGGIE" />
        <div className="HamburgerContainer" onClick={toggleMM}>
          <Hamburger/>
        </div>
      </div>

      <div className='desktop-nav-container'>
        <DesktopNav />
      </div>

      <div className='mobile-nav-container'>
      {showMM && <MobileNav />}
      </div>

    </header>
    </div>
  );
};

export { SiteHeader };
