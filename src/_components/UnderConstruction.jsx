
"use client"

import { useState } from 'react'
import LogoComponent from '@/logo/LogoComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function UnderConstruction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Email submitted:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Logo */}
      {/* <LogoComponent width="400px" height="400px" className="absolute inset-0 object-cover z-0" /> */}
      <div className="z-10 absolute inset-0 flex items-center justify-center bg-slate-300 opacity-5">
        {/* <img src="/placeholder.svg?height=400&width=400" alt="Company Logo" className= /> */}
        <LogoComponent width="400px" height="400px" className="w-full h-full object-contain" />
      </div>

      <div className="z-0 bg-primary  dark:bg-base-200 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Under Construction</h1>
        <p className="text-center mb-8">We're working hard to bring you something amazing. Stay tuned!</p>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-xl">Brent Sixkiller
            <span className="text-sm"><br/>CEO</span>
          </p>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-500" />
            <a href="mailto:Brent.Sixkiller@FirstNationsLLC.com" className="text-blue-600 hover:underline">
              Brent.Sixkiller@FirstNationsLLC.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-500" />
            <a href="tel:+12272139266" className="text-blue-600 hover:underline">(227) 213 - 9266</a>
          </div>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Get Updates</h2>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow form-input input input-primary"
            />
            <button className="btn" type="submit">Subscribe</button>
          </div>
          {submitted && <p className="text-green-600 text-sm">Thank you for subscribing!</p>}
        </form>
      </div>
    </div>
  )
}