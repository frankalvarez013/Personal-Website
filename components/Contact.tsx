'use client'

import { useState } from 'react'

const ContactUs = () => {
  const [submitt, onSubmitt] = useState(false)

  const [formResult, isFormResult] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const nameVal = (document.getElementById('name') as HTMLInputElement)?.value
    const emailVal = (document.getElementById('email') as HTMLInputElement)
      ?.value
    const msg = (document.getElementById('message') as HTMLInputElement)?.value
    console.log(nameVal, emailVal, msg)
    if (!nameVal || !emailVal || !msg) {
      isFormResult(true)
      console.log('hello?')
    } else {
      isFormResult(false)
      event.preventDefault()
      const formData = new FormData(event.target)
      formData.append('access_key', '7b3d8ab8-c5f2-448e-8693-aace83eb4f7f')

      const object = Object.fromEntries(formData)
      const json = JSON.stringify(object)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      const result = await response.json()
      onSubmitt(true)
      if (result.success) {
        console.log(result)
      }
    }
  }
  return (
    <section id="contact" className="bg-orangeJ flex justify-center snap-start">
      <div className="flex flex-col p-20 gap-10 justify-center">
        <div className="font-bold text-3xl" id="contact-title">
          Contact Me!
        </div>
        <div className="">
          <form
            action=""
            className="flex flex-wrap gap-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="flex grow " id="contact-name">
              <textarea
                id="name"
                name="name"
                className="w-full h-12 lg:h-20 p-3"
                placeholder="Name"
              />
            </label>
            <label htmlFor="email" className="flex grow" id="contact-email">
              <textarea
                id="email"
                name="email"
                className="w-full h-12 lg:h-20 p-3"
                placeholder="Email"
              />
            </label>
            <label
              htmlFor="message"
              className="flex basis-full"
              id="contact-message"
            >
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full p-3"
              />
            </label>
            <div
              className={`basis-full ${submitt ? 'hidden' : ''}`}
              id="contact-submit"
            >
              <input
                type="submit"
                value="Send Message"
                className="px-5 py-1 border-white border-4 hover:bg-white"
              />
            </div>
          </form>
        </div>
        <p
          className={`font-normal text-light-grey1 max-w-[900px] ${
            submitt ? '' : 'hidden'
          } `}
        >
          Your message has been successfully received. We appreciate your
          interest in AO Construction. Our team is reviewing your inquiry, and
          we will get back to you as soon as possible.
        </p>

        {formResult ? (
          <p className="font-normal text-red-500">
            Please make sure the form has all fields filled out
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </section>
  )
}
export default ContactUs
