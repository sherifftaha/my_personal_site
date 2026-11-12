
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start  gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Sherif</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Front-end developer with years of experience <br className='sm:block hidden' /> inside pharmacies and hospitals.
          </p>
          <div className='sm:mt-8 mt-5 flex flex-wrap sm:gap-4 gap-3 relative z-10'>
            <a href='#work' className='bg-[#915eff] hover:bg-[#7a45f0] text-white font-bold sm:py-3 py-2 sm:px-6 px-4 sm:text-[16px] text-[14px] rounded-xl transition-colors'>
              See my projects
            </a>
            <a href='#contact' className='border-2 border-[#915eff] text-white font-bold sm:py-3 py-2 sm:px-6 px-4 sm:text-[16px] text-[14px] rounded-xl hover:bg-[#915eff]/20 transition-colors'>
              Hire me
            </a>
            <a href='https://github.com/sherifftaha' target='_blank' rel='noopener noreferrer' className='sm:inline-block hidden text-secondary hover:text-white font-medium py-3 px-2 transition-colors'>
              GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero