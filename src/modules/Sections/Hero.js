//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Telegram } from '../Assets/Telegram';
import { Twitter } from '../Assets/Twitter';

const FROGGIE_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";

const Hero = () => (
  <div className="InnerContainer">
    <div className="Hero-PrimaryContainer">
      <div className="HeroTxt">
        <p>Froggie is here for everyone.</p>
        <h1 className='strokeme'>$FROGGIE</h1>
        <p>Froggie is the new wave.</p>
        <p>Join us in the pond.</p>
        <div className="HeroBtns">
          <div>
            <Link
              href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945"
              target="_blank"
              
            >
              {' '}
              BUY NOW VIA MINISWAP{' '}
            </Link>
            <Link
              href="https://cardanoscan.io/token/79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945"
              target="_blank"
            >
              {' '}
              Cardano Scan{' '}
            </Link>
          </div>
          <div>
            <Link
              className="circleBtn twitter"
              href="https://twitter.com/Froggieo_"
              target="_blank"
            >
              {' '}
              <Twitter />{' '}
            </Link>
          </div>
        </div>
      </div>

      <div className="HeroImg">
        <img
          src={FROGGIE_IMG}
          width={624}
          height={469}
          alt="Froggie"
        />
      </div>
    </div>
  </div>
);

export { Hero };
