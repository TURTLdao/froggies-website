//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FROGGIE_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";

const About = () => (
  <div id="About" className="InnerContainer">
    <div className="About-PrimaryContainer">
      <div className="AboutImg" style={{ margin:"0 auto" }}>
        <img
          src={FROGGIE_IMG}
          width={400}
          height={400}
          alt="FROGGIE"
        />
      </div>

      <div className="AboutTxt">
        <h2 className='strokeme'>About</h2>
        <p>
          Froggie's are life, Froggie's are love and we want Froggie's to stay.
        </p>
        <p>
          <i>Wait for froggie master for more information here</i>
        </p>
      </div>
    </div>
  </div>
);

export { About };
