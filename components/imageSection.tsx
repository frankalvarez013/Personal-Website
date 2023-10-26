import Image from 'next/image'
import Github from '../public/GitHub.svg'
import LinkedIn from '../public/Linkedin.svg'
import TechRemote from '../public/TechRemote.svg'
import TechStudy from '../public/TechStudy.svg'
import PurpleCase from '../public/purpleCase.svg'
import bbyCase from '../public/bbyCase.svg'
import YellowCase from '../public/yellowCase.svg'
import PinkCase from '../public/pnkCase.svg'

const imageSection = () => {
  return (
    <div className="h-60 flex items-end mb-5">
      <div className="basis-2/3 flex justify-evenly ">
        <Image alt="" src={TechStudy} width={240}></Image>
        <Image alt="" src={TechRemote} width={240}></Image>
      </div>

      <div className="flex gap-7 basis-1/3 items-end">
        <Image alt="" src={PurpleCase}></Image>
        <Image alt="" src={bbyCase}></Image>
        <Image alt="" src={YellowCase}></Image>
      </div>
    </div>
  )
}
export default imageSection
