import Image from 'next/image'
import LowTier from '../public/LowTier.svg'
import MidTier from '../public/MiddleTier.svg'
import TopTier from '../public/HighTier.svg'
import Face from '../public/Face.svg'
import ImageSection from '@/components/imageSection'
import AboutMe from '@/components/AboutMe'
import ProjectSection from '@/components/ProjectSection'
export default function Home() {
  return (
    <div>
      <main className="h-[750px] md:h-[500px] bg-gradient-blue">
        <div className="h-full bg-bottom bg-stack bg-no-repeat bg-fullW">
          <div className="h-full flex">
            <div className="h-full bg-bottom md:bg-[bottom_right_40%] bg-[url('/sun.svg')] bg-no-repeat flex md:flex-row flex-col-reverse flex-grow justify-center md:items-end">
              <div className="md:basis-1/4 flex justify-center md:items-end">
                <div className="flex flex-col gap-10 items-start relative top-5">
                  <div className="font-semibold text-5xl md:text-6xl">
                    WEB <br />
                    DEVELOPER
                  </div>
                  <div className="w-60">
                    Dynamic email tool for creators that doesn’t cost a leg.
                    Works with Sketch, Figma and XD. Easily import your content
                    and send with your favorite API.
                  </div>
                  <a
                    className="hidden md:block px-6 py-2 rounded-md bg-gray-800 text-white"
                    href="Frank_Alvarez_Resume_2023.pdf"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="md:basis-1/4 flex justify-center md:justify-end md:items-end pt-20">
                <Image
                  src={Face}
                  alt=""
                  className="w-[300px] md:min-w-[480px] md:relative md:top-32"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="hidden md:block">
        <ImageSection></ImageSection>
      </div>

      <AboutMe></AboutMe>
      <ProjectSection></ProjectSection>
    </div>
  )
}
