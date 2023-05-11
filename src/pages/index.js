
import { Inter } from '@next/font/google';
import { PrimaryContainer } from '../Templates/Primary-Container';
import { Meta } from '../modules/head/Meta';
import { About } from '../modules/Sections/About';
import { Tokenomics } from '../modules/Sections/Tokenomics';
import { HowToBuy } from '../modules/Sections/HowToBuy';
import { Hero } from '../modules/Sections/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const FROGGIE_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";
  return (
    <>
      <PrimaryContainer
        meta={
          <Meta
            metaTitle="The Frog that lives on $ADA"
            metaImg={FROGGIE_IMG}
            description="$FROGGIE's is a community owned meme coin ready to take over the world!"
          />
        }
      >
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
      </PrimaryContainer>
    </>
  );
}
