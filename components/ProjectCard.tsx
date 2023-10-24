const ProjectCard = (props) => {
  return (
    <div className="flex p-5 rounded-xl pb justify-start items-start  flex-wrap">
      <div className="font-bold mb-3 mr-10">
        {`${props.startTime} - ${props.endTime}`}
      </div>
      <div className=" max-w-sm">
        <div className="font-semibold text-lg ">
          {`${props.title} · ${props.business}`}
        </div>
        <p className="mb-3 text-sm leading-normal">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </p>
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
    </div>
  )
}
export default ProjectCard
