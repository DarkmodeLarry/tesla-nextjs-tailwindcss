import { motion } from 'framer-motion'

const Section = (props) => {
  return (
    <section
      className={`w-full max-h-screen overflow-hidden flex items-center justify-center relative ${props.cssClass}`}
    >
      <motion.h1
        className='absolute top-[15%] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-["Gotham"] font-bold'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {props.name}
      </motion.h1>
      {props.description && (
        <motion.span
          className='absolute top-[25%] text-base sm:text-lg 2xl:text-3xl font-["Gotham"]'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {props.description}
        </motion.span>
      )}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className='absolute bottom-[15%] flex flex-col md:flex-row gap-5 justify-center items-center'
      >
        <a
          className='text-center py-[10px] md:py-[13px] rounded-full bg-[#3A3D41] text-xs tracking-widest text-white font-["Gotham"] font-semibold backdrop-blur-md opacity-90 hover:opacity-100 transition md:w-[300px] w-[250px]'
          href={props.firstBtnLabel}
        >
          {props.firstBtnLabel}
        </a>
        {props.secondBtnLabel && (
          <a
            className='text-center  py-[10px] md:py-[13px] rounded-full bg-[#EBECEB] text-xs tracking-widest text-gray-700 font-["Gotham"] font-semibold backdrop-blur-md opacity-80 hover:opacity-90 transition hover:text-gray-800 md:w-[300px] w-[250px]'
            href={props.secondBtnURL}
          >
            {props.secondBtnLabel}
          </a>
        )}
      </motion.div>
    </section>
  )
}

export default Section
