import ProjectCard from './ProjectCard'
const ProjectSection = () => {
  const projects = [
    {
      startTime: 'Jan 2024',
      endTime: 'Apr 2024',
      title: 'Full Stack Developer',
      business: 'Territory Assistant',
      Tech: [
        'Next.js',
        'React.js',
        'CSS',
        'Tailwind',
        'PRISMA ORM',
        'SQL',
        'Typescript',
      ],
      Description:
        'Developed a responsive full-stack application with Next.js and Tailwind CSS, improving admin efficiency in managing and distributing information by 30%. Constructed and implemented a RESTful API with Prisma (SQL), enhancing real-time data access and increasing user engagement by 25%. Coordinated project tasks using JIRA and ensured efficient source control with Git, leading to a 20% improvement in milestone tracking and productivity. Designed and Optimized Territory React Components, ensuring the large scale system can operate in high performances. ',
      link: 'https://github.com/frankalvarez013/territory_assistant',
    },
    {
      startTime: 'August 2023',
      endTime: 'October 2023',
      title: 'Web Developer',
      business: 'AO Construction',
      Tech: [
        'Nextjs',
        'React.js',
        'HTML',
        'Tailwind',
        'JavaScript',
        'CSS',
        'Figma',
      ],
      Description:
        'Tasked to create a dynamic and responsive website for a local construction company, I created a wireframe from Figma for the design schema of the website. Using Tailwind and Nextjs tools, I was able to implement the design of the website with animations. The website consists of a main page with the general information of the company, a projects section which uses the Google API to show all the construction sites that have been worked on to show the progress of each job site, and an about page of the team',
      link: 'https://ao-construction-m4e4yoex6-frankalvarez013s-projects.vercel.app/',
    },
    {
      startTime: 'August 2023',
      endTime: 'October 2023',
      title: 'Web Developer',
      business: 'AO Construction',
      Tech: [
        'Nextjs',
        'React',
        'HTML',
        'Tailwind',
        'JavaScript',
        'CSS',
        'Figma',
      ],
      Description:
        'Tasked to create a dynamic and responsive website for a local construction company, I created a wireframe from Figma for the design schema of the website. Using Tailwind and Nextjs tools, I was able to implement the design of the website with animations. The website consists of a main page with the general information of the company, a projects section which uses the Google API to show all the construction sites that have been worked on to show the progress of each job site, and an about page of the team',
      link: 'https://ao-construction-m4e4yoex6-frankalvarez013s-projects.vercel.app/',
    },
    {
      startTime: 'August 2022',
      endTime: 'Dec 2022',
      title: 'Lead Developer',
      business: 'Senior Project - NonFungaiTea',
      Tech: ['Kotlin', 'Firebase Database'],
      Description:
        'Utilized Kotlin to develop a photo-sharing application where users can customize and mint photos through a mobile app. Application Allocates user information and photo ownership using a Firebase Database to maintain and organize data.',
      link: 'https://github.com/nonfungaistea/nonfungaistea',
    },
    {
      startTime: 'Jan 2022',
      endTime: 'Aug 2022',
      title: 'Lead Developer',
      business: 'RateMySupervisor - Website',
      Tech: ['WordPress', 'Firebase Database'],
      Description:
        'Designed a web application using WordPress to create a searchable forum which shares experiences and reviews on board member to help union members make critical work choices.',

      link: 'https://local17ratemysupervisor.org/',
    },
  ]
  return (
    <div
      className="h-auto pt-28 flex justify-center items-center m-auto"
      id="experience"
    >
      <div className="flex w-11/12 h-5/6 flex-col md:flex-row justify-start lg:justify-center gap-10">
        <div className="text-center md:mr-16">
          <h1 className="font-bold text-2xl whitespace-nowrap  mb-5 mx-auto">
            Projects & Experience!
          </h1>
          <div className="w-1/2 font-light m-auto">
            I build accessible, inclusive products and digital experiences for
            the web.
          </div>
        </div>
        <div className=" max-w-[41rem]">
          {projects.map((value, index) => {
            return (
              <ProjectCard
                key={index}
                startTime={value.startTime}
                endTime={value.endTime}
                title={value.title}
                business={value.business}
                Tech={value.Tech}
                Description={value.Description}
                link={value.link}
              ></ProjectCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ProjectSection
