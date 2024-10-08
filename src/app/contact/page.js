'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [charCount, setCharCount] = useState(0)

  const MAX_CHARS = 512

  useEffect(() => {
    setCharCount(message.length)
  }, [message])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    // For this example, we'll just simulate a successful submission
    console.log('Form submitted:', { name, email, message }) 
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleMessageChange = (e) => {
    const input = e.target.value
    if (input.length <= MAX_CHARS) {
      setMessage(input)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Brent Sixkiller</h3>
              <p className="text-sm">CEO</p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Brent.Sixkiller@FirstNationsLLC.com
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (227) 213 - 9266
              </p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Aaron Averre</h3>
              <p className="text-sm">COO</p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Aaron.Averre@FirstNationsLLC.com
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          {submitted ? (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Your message has been sent successfully!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="message">
                  <span className="label-text">Message</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    className="textarea textarea-bordered h-24 w-full"
                    required
                    maxLength={MAX_CHARS}
                  ></textarea>
                  <div 
                    className={`absolute bottom-2 right-6 text-xs ${
                      charCount === MAX_CHARS ? 'text-error' : 'text-base-content'
                    }`}
                  >
                    {charCount}/{MAX_CHARS}
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}