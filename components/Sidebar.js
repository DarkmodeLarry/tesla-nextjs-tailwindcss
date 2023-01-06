import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { sidebarLinks } from '../utils/sidebarLinks'

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}

const Sidebar = ({ open, cycleOpen }) => {
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='fixed top-0 left-0 z-[50] h-screen w-screen backdrop-blur-md '
          onClick={cycleOpen}
        />
      )}
      <motion.aside
        className={`fixed top-0 right-0 bottom-0 z-50 bg-gray-50 pl-4 overflow-y-auto p-5 border-[1px] border-gray-100`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <XMarkIcon
          onClick={cycleOpen}
          className='h-7 w-7 font-bold text-red-700 cursor-pointer rounded-full bg-blur p-1 select-none float-right hover:scale-150 transition-transform duration-400'
        />

        <motion.ul
          className='flex flex-col gap-3 p-2 justify-center font-["Gotham"] font-semibold mt-7 '
          initial='closed'
          animate='open'
          variants={sideVariants}
        >
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <motion.a
                className='rounded-lg py-2 px-4 bg-blur'
                href={link.url}
                target='_blank'
                rel='noreferrer'
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </motion.aside>
    </>
  )
}

export default Sidebar
