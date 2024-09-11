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
          <div className="py-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Modify Your Brand’s Face Instantly</h2>
                <p className="text-lg text-blue-200 mb-8">
                  Effortlessly create and customize lifelike avatars of your live models. Modify poses, outfits, and settings with ease, all in one place. Say goodbye to reshoots and deliver high-quality content faster than ever before.
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
                  <Image src={Logos} width={1024} alt="Logos" className='mb-8'/>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}