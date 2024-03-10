import Logo from '../assets/homepage/logo.svg'
import AppStore from '../assets/homepage/apple.svg'
import PlayStore from '../assets/homepage/google-play.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='grid grid-cols-4 gap-4 w-[90%] mx-auto my-6 text-[.9rem]'>
          <div>
            <img src={Logo} alt="" />
            <p className='my-3'>We believe it has the power to do amazing things.</p>
            <p className='my-3'>Interested in working with us?</p>
            <p className='my-3 font-semibold'>info@example.com</p>
          </div>
          <div>
            <h1 className='font-semibold mt-[4rem] mb-5'>Quick Links</h1>

            <ul>
              <li className='my-4'>Services</li>
              <li className='my-4'>About Us</li>
              <li className='my-4'>Latest Food</li>
              <li className='my-4'>My Account</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold mt-[4rem] mb-5'>Address</h1>
            <p className='mb-6'>570 8th Ave, New York, NY 10018 United States</p>
            <div>
              <p className='font-semibold mb-2'>Hours:</p>
              <p className='my-2'>9.30am - 6.30pm</p>
              <p className='my-2'>Monday To Friday</p>
            </div>
          </div>
          <div>
            <h1 className='font-semibold mt-[4rem] mb-5'>Install App</h1>
            <p>FROM APP STORE OR GOOGLE PLAY</p>
            <div className='my-4 flex items-center gap-5'>
              <img src={AppStore} alt="" />
              <img src={PlayStore} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer