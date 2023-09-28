import Image from 'next/image'
import LowTier from '../public/LowTier.svg'
import MidTier from '../public/MiddleTier.svg'
import TopTier from '../public/HighTier.svg'

export default function Home() {
  return (
    <main className="h-[500px] bg-gradient-blue">
      <div className="h-full bg-bottom bg-stack bg-no-repeat bg-fullW">
        <div className="h-full flex">
          <div className="h-full bg-bottom lg:bg-[bottom_right_35%] bg-[url('/sun.svg')] bg-no-repeat flex flex-grow flex-shrink-0 justify-evenly items-center">
            <div className="basis-1/2">hi</div>
            <div className="basis-1/3">hello</div>
          </div>
        </div>
      </div>
    </main>
  )
}
