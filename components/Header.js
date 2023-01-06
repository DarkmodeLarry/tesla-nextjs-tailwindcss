import Image from 'next/image'
import tesla from '../public/assets/images/teslalogo.webp'

const Header = ({ cycleOpen }) => {
  return (
    <header className='flex fixed top-0 justify-between mx-auto z-50 px-2 sm:px-8 md:px-14 py-6 w-full font-["Gotham"] font-semibold text-sm sm:gap-0 gap-3 scrollbar-none'>
      <div>
        <Image className='opacity-80' src={tesla} width={120} height={29} alt='tesla logo' />
      </div>
      <div className='hidden xl:block'>
        <ul className='flex items-center justify-center'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla/models'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model S
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla/model3'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model 3
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla/modelx'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model X
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla/modely'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Model Y
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla/solarroof'
              className='px-4 py-2 transition rounded-lg bg-blur'
            >
              Solar Roof
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className='flex'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.shop.tesla.com'
              className='px-1 py-2 transition rounded-lg sm:px-4 bg-blur'
            >
              Shop
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.tesla.com/teslaaccount'
              className='px-1 py-2 transition rounded-lg sm:px-4 bg-blur'
            >
              Account
            </a>
          </li>
          <li>
            <a className='px-1 py-2 transition rounded-lg sm:px-4 bg-blur' onClick={cycleOpen}>
              Menu
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
