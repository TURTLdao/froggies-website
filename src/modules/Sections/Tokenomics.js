//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FROGGIE_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";

const Tokenomics = () => (
  <div id="Tokenomics" className="InnerContainer">
    <div className="Tokenomics-PrimaryContainer">
      <h2 className='strokeme'>Tokenomics</h2>

      <div className="TokenomicSplit">
        <div className="TokenSupplyHeros" style={{ margin:"0 auto"}}>
          <div className="DisplayBlocks">
          </div>
          <div className="DisplayBlocks">
            <div className="InnerBlock"  style={{ maxWidth: 600,  margin:"0 auto", marginTop: 20}}>
              <h4 className='strokeme'>Policy ID</h4>
              <h5>79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1</h5>
            </div>
            <br></br>
            <div className="InnerBlock"  style={{ maxWidth: 450,  margin:"0 auto", marginTop: 20}}>
              <h4 className='strokeme'>Fingerprint</h4>
              <h5>asset19c3e54qhtme5pptxsgpwu4ea60904drzlyxn0l</h5>
            </div>
            <br></br>
            <div className="InnerBlock"  style={{ width: "100%", maxWidth: "100%",  margin:"0 auto", marginTop: 20}}>
              <h4 className='strokeme'>Token Supply</h4>
              <p>69,000,000,000</p>
            </div>
            <br></br>
          </div>
          <div className="TokenSupplyImg">
            <img
              src={FROGGIE_IMG}
              width={550}
              height={589}
              alt="FROGGIE"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Tokenomics };
