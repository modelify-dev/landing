import Image from 'next/image'
import Pricing01 from '@/public/images/pricing-01.png'
import Pricing02 from '@/public/images/pricing-02.png'
import Pricing03 from '@/public/images/pricing-03.png'
import Pricing04 from '@/public/images/pricing-04.png'

export default function Section07() {
  return (
    <section className="mt-12 md:mt-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 mb-4">Find the perfect plan for your content creation needs</h2>
                <p className="text-lg text-slate-500 mb-8">
                From beginners to enterprises, our AI-powered platform offers scalable, customizable solutions for creating and modifying lifelike avatars, tailored to fit your brand’s vision.
                </p>
              </div>

              {/* Pricing tables */}
              <div
                className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Pricing table 1 */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Starter</div>
                    <Image className="w-full rounded-lg" src={Pricing01} width={210} height={124} alt="Starter" />
                  </div>
                  {/* <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$0/m</div>
                    <a className="btn-sm w-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 shadow-sm" href="#0">
                      Get Starter
                    </a>
                  </div> */}
                  <div className="text-slate-800 font-medium mb-4">Features include</div>
                  <ul className="text-slate-500 text-left space-y-2">
                  <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Suitable for individuals or freelancers just starting out</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Basic avatar creation with AI</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Limited modifications per month (up to 10 avatars)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Basic customization options (poses, lighting, background))</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Access to pre-set templates for quick avatar generation</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing table 2 */}
                <div className="relative flex flex-col h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-br-[100px] py-5 px-6">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-teal-500 font-[550] rounded-full px-3 py-px">
                    Popular
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Influencer</div>
                    <Image className="w-full rounded-lg" src={Pricing02} width={210} height={124} alt="Smart" />
                  </div>
                  {/* <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$12/m</div>
                    <a className="btn-sm w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 shadow-sm" href="#0">
                      Get Smart
                    </a>
                  </div> */}
                  <div className="text-slate-800 font-medium mb-4">Everything in Starter, plus</div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Suitable for influencers and creators needing regular, fresh content</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Increased monthly modifications (up to 50 avatars)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Advanced customization options (outfits, accessories, enhanced backgrounds)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Batch avatar creation for faster content production</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Social media optimization tools for avatar-based posts</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing table 3 */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Business</div>
                    <Image className="w-full rounded-lg" src={Pricing03} width={210} height={124} alt="You" />
                  </div>
                  {/* <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$24/m</div>
                    <a className="btn-sm w-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 shadow-sm" href="#0">
                      Get You
                    </a>
                  </div> */}
                  <div className="text-slate-800 font-medium mb-4">Everything in Influencer, plus</div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Perfect for small to medium-sized businesses with growing content needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited monthly avatars and modifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Full control over customization (product placements, detailed facial expressions)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>API integration for automated avatar generation within business workflows</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Multi-user collaboration for team-based avatar creation</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing table 4 */}
                <div className="relative flex flex-col h-full rounded-br-[100px] py-5 px-6">
                  <div className="mb-4">
                    <div className="text-lg font-bold text-center mb-3">Enterprise</div>
                    <Image className="w-full rounded-lg" src={Pricing04} width={210} height={124} alt="Black" />
                  </div>
                  {/* <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$49/m</div>
                    <a className="btn-sm w-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 shadow-sm" href="#0">
                      Get Black
                    </a>
                  </div> */}
                  <div className="text-slate-800 font-medium mb-4">Everything in Business, plus</div>
                  <ul className="text-slate-500 text-left space-y-2">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tailored for large enterprises and agencies with complex, high-volume content demands</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Dedicated AI training for personalized avatars unique to your brands</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Full white-label options with branding control</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Real-time avatar updates and collaboration across global teams</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited API access for full-scale automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}