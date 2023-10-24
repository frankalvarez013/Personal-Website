import ProjectCard from './ProjectCard'
const ProjectSection = () => {
  return (
    <div
      className="h-[1000px] md:h-[1200px] flex justify-center items-center"
      id="experience"
    >
      <div className="flex w-11/12 h-5/6 flex-col md:flex-row justify-start lg:justify-center gap-10">
        <div className="">
          <h1 className="font-bold text-2xl whitespace-nowrap">
            Projects & Experience!
          </h1>
        </div>
        <div className=" max-w-[41rem] border-black border-8">
          <ProjectCard
            startTime="2018"
            endTime="present"
            title="Lead Engineer"
            business="Upstatement"
            Tech={['Nextjs', 'React', 'CSS', 'Tailwind', 'Vercel']}
          ></ProjectCard>
        </div>
      </div>
    </div>
  )
}
export default ProjectSection
