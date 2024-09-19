"use client"; // Ensures that this is a Client Component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Illustration from '@/public/images/hero-illustration.svg';

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    comment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resultText = await response.text();
      console.log('Raw response from server:', resultText);

      if (resultText) {
        const result = JSON.parse(resultText);
        if (result.success) {
          alert('Your information has been successfully received. We will be in touch with you shortly.');
        } else {
          alert('Error: ' + result.message);
        }
      } else {
        throw new Error('Empty response from server');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4">
              <Link className="block" href="/" aria-label="Cruip">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <g fillRule="nonzero" fill="none">
                    <g className="fill-blue-500" transform="translate(3 3)">
                      <circle cx="5" cy="5" r="5" />
                      <circle cx="19" cy="5" r="5" />
                      <circle cx="5" cy="19" r="5" />
                      <circle cx="19" cy="19" r="5" />
                    </g>
                    <g className="fill-sky-300">
                      <circle cx="15" cy="5" r="5" />
                      <circle cx="25" cy="15" r="5" />
                      <circle cx="15" cy="25" r="5" />
                      <circle cx="5" cy="15" r="5" />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-36 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-12 xl:space-x-16">
                {/* Left side */}
                <div className="grow lg:mt-16 mb-16 lg:mb-0 text-center lg:text-left">
                  <h1 className="h2 mb-8">Convert real models into virtual avatars</h1>

                  <div className="mb-12">
                    <ul className="inline-flex flex-col text-slate-500 space-y-2.5">
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Save time with AI-modified model avatars.</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Scale content with personalized lifelike avatars.</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Boost efficiency with instant avatar creation.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right side */}
                <div className="relative shrink-0 text-center lg:text-left">
                  <div
                    className="absolute inset-0 mb-44 -mx-4 sm:-mx-6 lg:-mt-[9999px] lg:ml-0 lg:-mr-[9999px] rounded-bl-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
                    aria-hidden="true"
                  />

                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-40 ml-20 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={Illustration}
                    alt="Illustration"
                    aria-hidden="true"
                  />

                  <div className="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
                    <div className="w-full max-w-[480px] mx-auto lg:w-[480px] lg:max-w-none lg:mx-0 xl:w-[512px] bg-white p-6 shadow-2xl">
                      {/* Form */}
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="firstName">
                              First name
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="firstName" className="form-input text-sm py-2 w-full" type="text" value={formData.firstName} onChange={handleChange} required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="lastName">
                              Last name
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="lastName" className="form-input text-sm py-2 w-full" type="text" value={formData.lastName} onChange={handleChange} required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="email">
                              Work email
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="email" className="form-input text-sm py-2 w-full" type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="website">
                              Website
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="website" className="form-input text-sm py-2 w-full" type="text" value={formData.website} onChange={handleChange} required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="comment">
                              Anything else?
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <textarea id="comment" className="form-textarea text-sm py-2 w-full" rows={4} value={formData.comment} onChange={handleChange} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-right">
                          <button className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm">
                            Submit the form
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}