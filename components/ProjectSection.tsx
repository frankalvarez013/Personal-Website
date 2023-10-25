import ProjectCard from './ProjectCard'
const ProjectSection = () => {
  const projects = [
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
    {
      startTime: 'May 2023',
      endTime: 'July 2023',
      title: 'Web Developer',
      business: 'Adopt Me! - Website',
      Tech: ['React', 'CSS'],
      Description:
        'Personal Project used to understand the React framework. I implemented React Hooks, Effects, Custom Hooks, React Router, Query, Unctrolled Forms and Class Components.',
      link: 'https://frankalvarez013.github.io/Adopt-Pet/',
    },
  ]
  return (
    <div
      className="h-auto pt-28 flex justify-center items-center m-auto"
      id="experience"
    >
      <div className="flex w-11/12 h-5/6 flex-col md:flex-row justify-start lg:justify-center gap-10">
        <div className="text-center">
          <h1 className="font-bold text-2xl whitespace-nowrap md:mr-20 mb-5  m-auto">
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
