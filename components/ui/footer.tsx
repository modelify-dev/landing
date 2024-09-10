import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/footer-illustration.svg'
import Logo from '@/public/images/logo-name.png'

export default function Footer() {
  return (
    <footer className="relative pt-5">
      {/* Bg */}
      <div className="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true" />

      {/* Illustration */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Footer illustration" />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        {/* <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8"> */}
          {/* 1st block */}
          {/* <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs"> */}
            {/* Logo */}
            {/* <Link className="block" href="/" aria-label="Cruip">
              <Image src={Logo} width="112" height="58" alt="Logo" />
            </Link>
          </div> */}

          {/* 2nd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Essentials</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Payments
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Budgeting and analytics
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Open banking
                </a>
              </li>
            </ul>
          </div> */}

          {/* 3rd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  About us
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Sustainability
                </a>
              </li>
            </ul>
          </div> */}

          {/* 4th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Lifestyle</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  International products
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Currency exchange
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Lounge & Smart delay
                </a>
              </li>
            </ul> 
          </div> */}

          {/* 5th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Send us an email
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                  Twitter
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8 pt-4">
          <div className="text-xs text-slate-500 text-center">
            © 2024 Modelify. All Rights Reserved.
            {/* <a className="font-medium underline hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
              here
            </a>{' '}
            If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland.
            Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment, current
            account and demand deposit account services. */}
          </div>
        {/* </div> */}
      </div>
    </footer>
  )
}
