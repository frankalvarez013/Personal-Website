import Image from 'next/image'
import Asset_1 from '../public/Asset 1.svg'
const ProjectCard = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="flex p-5 rounded-3xl pb justify-start items-start flex-wrap  lg:hover:bg-rose-100"
    >
      <div className="font-bold mb-3 mr-10 w-48 whitespace-normal">
        {`${props.startTime} - ${props.endTime}`}{' '}
      </div>
      <div className=" max-w-sm">
        <div className="font-semibold text-lg inline-flex gap-3">
          {`${props.title} · ${props.business}`}
          <Image alt="" src={Asset_1} height={15}></Image>
        </div>
        <p className="mb-3 text-sm leading-normal">{props.Description}</p>
        <div className="flex gap-2 flex-wrap">
          {props.Tech.map((value, index) => {
            return (
              <div
                className="rounded-3xl py-[2px] px-3 bg-red-300 bg-opacity-30 text-red-500 text-rose-400"
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </a>
  )
}
export default ProjectCard
