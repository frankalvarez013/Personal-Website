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
      <div
        className="flex flex-col justify-evenly md:justify-center items-center h-full"
        id="about"
      >
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex flex-col basis-1/2 items-center justify-center">
            <div className=" w-3/4">
              <h4 className="font-bold text-xl mb-4">About Me</h4>
              <p className="font-thin whitespace-pre-line">
                I am Frank Santiago Alvarez, a motivated front-end developer
                with aspirations of evolving into a proficient full-stack
                developer. Currently, I am delving into the intricacies of
                Javascript and React in order to understand this strange system
                to master the technicalities with this language in order to
                understand in depth its complexity, a skill I am committed to
                honing. Since high school I have had a deep passion for computer
                science and my experience in California State University Long
                Beach has made me a much more discplined and knowledgeable
                individual. and I hope to work with others in the near future to
                be able to collaborate on great products!
              </p>
            </div>
          </div>
          <div className="basis-1/3 m-auto">
            <Image alt="" src={Face} className="w-[250px] md:w-[400px]"></Image>
          </div>
        </div>
        <div
          className="flex gap-10 items-center justify-center basis-1/5 md:relative md:top-60 flex-col md:flex-row"
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
          <div className="w-2/3 flex justify-center">
            <div className="lg:w-3/4">
              <h1 className="font-bold text-xl">Skills</h1>
              <p>
                I am currently trying to improve my ability to create better UI
                designs by using wireframes. I am also trying to integrate what
                I've learned from school from SQL and Object-Oriented-Programs
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
