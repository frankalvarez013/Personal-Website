import Image from 'next/image'
import Face from '../public/profile.svg'
const AboutMe = () => {
  const skills = [
    'NextJS',
    'React',
    'HTML',
    'Javascript',
    'Tailwind',
    'CSS',
    'Python',
    'GitHub',
    'VSCode',
    'MySQL',
  ]
  return (
    <div className="h-[1200px] bg-[url('/BodyTier.png')] bg-[50%_40%] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-evenly h-full" id="about">
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex flex-col basis-1/2 items-center justify-center">
            <div className=" w-3/4">
              <h4 className="font-bold text-xl mb-4">About Me</h4>
              <p className="font-thin whitespace-pre-line text-sm md:text-base">
                I am Frank Santiago Alvarez, a dedicated software developer
                aiming to expand my expertise into full-stack development. My
                current focus is on mastering JavaScript and React, delving deep
                into their intricacies to enhance my technical proficiency.
                Since high school, my passion for computer science has been a
                driving force in my life. My academic journey at California
                State University Long Beach has not only honed my development
                skills but also instilled a strong discipline in my work. I am
                eager to collaborate with like-minded professionals on
                innovative projects, contributing to and learning from the
                development of outstanding products.
              </p>
            </div>
          </div>
          <div className="basis-1/3 m-auto mb-10 md:mb-auto">
            <Image alt="" src={Face} className="w-[250px] md:w-[400px]"></Image>
          </div>
        </div>
        <div
          className="flex gap-10 items-center justify-center basis-1/5 md:relative flex-col md:flex-row"
          id="skills"
        >
          <div className="w-72 flex items-center justify-center flex-wrap gap-5 ">
            {skills.map((value, key) => {
              return (
                <div
                  key={key}
                  className="rounded-3xl py-[2px] px-3 bg-[rgb(168,181,246)] bg-opacity-30 text-blue-800 text-xl"
                >
                  {value}
                </div>
              )
            })}
          </div>
          <div className="w-2/3 md:w-2/5 flex justify-center">
            <div className="lg:w-2/3">
              <h1 className="font-bold text-sm md:text-xl">Skills</h1>
              <p>
                I am currently trying to improve my ability to create better UI
                designs by using wireframes. I am also trying to integrate what
                I have learned from school from SQL and Object-Oriented-Programs
                into the products I am creating in the Web. All the languages
                and softwares are things I have a proficient level of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe
