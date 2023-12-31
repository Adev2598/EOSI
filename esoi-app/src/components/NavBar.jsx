import { useState, useEffect, React} from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Switch } from 'antd';

import NavLogo from '../assets/eosi-logo/EOSI_logo_full.png'
import NavLogoWhite from '../assets/eosi-logo/EOSI_white_logo_full.png'

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    // { name: 'Register', href: '#' },
    { name: 'Contact us', href: '#contactus' },
  ]

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

const NavBar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
  return (
    <>
    <div className="sticky top-0">
        <header className="absolute inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">EOSI</span>
              
              <img
                className="h-14 w-auto pt-2 dark:hidden"
                src={NavLogo}
                alt="EOSI-Logo"
              />
              
            <img
                className="h-14 w-auto light:hidden"
                src={NavLogoWhite}
                alt="EOSI-Logo"
            />
            
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="dark:text-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="dark:text-white text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className=" dark:text-white text-sm font-semibold leading-6 text-gray-900">
              Register <span aria-hidden="true">&rarr;</span>
            </a> */}
            <Switch className='bg-black dark:bg-gray-500' defaultChecked onChange={onChange} />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="dark:bg-slate-800 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">EOSI</span>
            <img
                className="h-14 w-auto dark:hidden"
                src={NavLogo}
                alt="EOSI-Logo"
            />
            <img
                className="h-14 w-auto light:hidden"
                src={NavLogoWhite}
                alt="EOSI-Logo"
            />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700  dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="dark:text-white -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {/* <a
                    href="#"
                    className=" dark:text-white -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </a> */}
                  <Switch className='bg-black dark:bg-gray-500' defaultChecked onChange={onChange} />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
    </>
  )
}

export default NavBar