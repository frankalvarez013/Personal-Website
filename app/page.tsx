import Image from 'next/image'
import LowTier from '../public/LowTier.svg'
import MidTier from '../public/MiddleTier.svg'
import TopTier from '../public/HighTier.svg'
import Face from '../public/Face.svg'
export default function Home() {
  return (
    <main className="h-[500px] bg-gradient-blue">
      <div className="h-full bg-bottom bg-stack bg-no-repeat bg-fullW">
        <div className="h-full flex">
          <div className="h-full bg-bottom lg:bg-[bottom_right_40%] bg-[url('/sun.svg')] bg-no-repeat flex flex-grow flex-shrink-0 justify-center items-end">
            <div className="basis-1/4 flex justify-center items-end">
              <div className="flex flex-col gap-10 items-start lg:absolute lg:bottom-48">
                <div className="font-semibold text-6xl ">
                  WEB <br />
                  DEVELOPER
                </div>
                <div className="w-60">
                  Dynamic email tool for creators that doesn’t cost a leg. Works
                  with Sketch, Figma and XD. Easily import your content and send
                  with your favorite API.
                </div>
                <button className="px-6 py-2 rounded-md bg-gray-800 text-white">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="basis-1/4 justify-end items-end">
              <Image
                src={Face}
                alt=""
                className="max-h-[480px] lg:absolute lg:bottom-28"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
