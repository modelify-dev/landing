import Image from 'next/image'
import LogosIllustration from '@/public/images/cards-illustration.svg'
import Logos from '@/public/images/logos.png'

export default function Section05() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Get started in minutes and connect all your accounts in one place</h2>
                <p className="text-lg text-blue-200 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center mb-6" data-aos="fade-up" data-aos-delay="100">
                <div className="relative">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={LogosIllustration}
                    alt="Logos illustration"
                    aria-hidden="true"
                  />
                  <Image src={Logos} width={720} height={283} alt="Logos" />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}