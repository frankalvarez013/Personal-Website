import Image from 'next/image'
import LowTier from '../public/LowTier.svg'
import MidTier from '../public/MiddleTier.svg'
import TopTier from '../public/HighTier.svg'

export default function Home() {
  return (
    <main className="h-[582px] bg-gradient-blue">
      <div className="h-full bg-bottom bg-stack bg-no-repeat bg-fullW">
        <div className="h-full flex ">
          <div className="h-full bg-bottom lg:bg-right-bottom bg-[url('/sun.svg')] bg-no-repeat flex-grow flex-shrink-0"></div>
          <div className="lg:basis-1/3 flex-shrink"></div>
        </div>
      </div>
    </main>
  )
}
