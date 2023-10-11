import Image from 'next/image'
import Face from '../public/profile.svg'
const AboutMe = () => {
  return (
    <div className="h-[1200px] bg-[url('/BodyTier.png')] bg-[50%_40%] bg-no-repeat bg-cover">
      <div
        className="flex flex-col justify-around md:justify-center items-center h-full"
        id="about"
      >
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex flex-col basis-1/2 items-center justify-center ">
            <div className="w-1/2">
              <h4 className="font-bold text-xl">About Me</h4>
              <p>
                Emails are traditionally painfully slow to work with. We’ve made
                a drag and drop tool that automatically fetches data and easily
                copy or send HTML using your favorite API.
              </p>
            </div>
          </div>
          <div className="basis-1/3  m-auto">
            <Image alt="" src={Face} className="w-[250px] md:w-[400px]"></Image>
          </div>
        </div>
        <div
          className="flex items-center justify-center basis-1/5 md:relative md:top-60 flex-col md:flex-row"
          id="skills"
        >
          <div className="basis-1/2 flex items-center justify-center">
            <Image alt="" src={Face} width={250}></Image>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2">
              <h1 className="font-bold text-xl">Skills</h1>
              <p>
                Some email services cost hundreds or thousands to send to a
                not-so-large audience. We’ll make sure you can stop worrying
                bout costs and more about sending your beautiful content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe
