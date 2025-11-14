import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  // This will be set on the client side to avoid hydration issues
  const currentYear = typeof window !== 'undefined' ? new Date().getFullYear() : 2024

  const quickLinks = [
    { name: 'Upcoming Events', href: '/#upcoming' },
    { name: 'Past Events', href: '/#past' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const eventTypes = [
    'Tech Conferences',
    'Workshops', 
    'Hackathons',
    'Meetups',
    'Webinars'
  ]

  return (
    <footer className="glass mt-20 border-t border-border-dark">
      <div className="mx-auto container sm:px-10 px-5 py-12">
        <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link className='logo flex flex-row items-center gap-2' href='/'>
              <Image
                src="/icons/logo.png"
                alt='DevEvents Logo'
                width={24}
                height={24}
              />
              <p className='text-xl font-bold italic'>DevEvents</p>
            </Link>
            <p className="text-light-200 text-sm">
              Discover, attend, and relive the best developer events. From upcoming conferences to past workshops, we've got every coder's calendar covered.
            </p>
            <div className="flex gap-3">
              <div className="pill cursor-pointer hover:bg-dark-200 transition-colors">
                Twitter
              </div>
              <div className="pill cursor-pointer hover:bg-dark-200 transition-colors">
                LinkedIn
              </div>
              <div className="pill cursor-pointer hover:bg-dark-200 transition-colors">
                GitHub
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-light-100 text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2 list-none">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-light-200 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-light-100 text-lg font-semibold">Event Types</h3>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <span 
                  key={type}
                  className="pill text-xs bg-dark-200/50 hover:bg-dark-200 transition-colors cursor-pointer"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-light-200 text-sm">
            © {currentYear} DevEvents. All rights reserved.
          </p>
          <div className="flex gap-6 text-light-200 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-dark-100 border border-dark-200 rounded-lg p-4 mt-6 card-shadow">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-primary text-lg font-bold">150+</span>
              <span className="text-light-200 text-xs">Upcoming Events</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary text-lg font-bold">500+</span>
              <span className="text-light-200 text-xs">Past Events</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary text-lg font-bold">10K+</span>
              <span className="text-light-200 text-xs">Developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer