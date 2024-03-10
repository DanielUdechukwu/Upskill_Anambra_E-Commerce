import Search from '../assets/homepage/search.svg'
import Phone from '../assets/homepage/call.svg'
import Facebook from '../assets/homepage/facebook.svg'
import Insta from '../assets/homepage/insta.svg'
import Logo from '../assets/homepage/logo.svg'
import Cart from '../assets/homepage/cart.svg'

const Nav = () => {
  return (
    <>
      <header>
        <nav className='hidden md:block'>
          <div className='border-b border-[#979797]'>
            <div className='flex w-[90%] mx-auto text-sm'>
              <div className='w-[15%] border-r border-[#979797] py-3'>
                <p className='text-[#433D3D]'><span className='text-[#49A62C]'>100%</span> Secure delivery </p>
              </div>
              <div className='w-[85%] flex justify-between items-center py-3'>
                <div className='flex justify-center leading-none items-center gap-1 pl-6'>
                  <img className='' src={Search} alt="search icon" />
                  <p>Search</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex justify-center leading-none items-center gap-1'>
                    <img className='' src={Phone} alt="telephone icon" />
                    <p>08167000077</p>
                  </div>
                  <div className='flex justify-center leading-none items-center gap-1'>
                    <img className='' src={Facebook} alt="facebook icon" />
                    <p>Taste_heaven</p>
                  </div>
                  <div className='flex justify-center leading-none items-center gap-1'>
                    <img className='' src={Insta} alt="instagram icon" />
                    <p>Taste_heaven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center w-[90%] mx-auto'>
            <img src={Logo} alt="" />
            <div className='text-sm font-semibold'>
              <ul className='flex items-center justify-center gap-10'>
                <li className='text-[#49a62c]'>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
                <li className='flex items-center gap-3'>
                  <div className='relative flex items-center'>
                    <img src={Cart} alt="" />
                    <p className='absolute -top-2 -right-2 bg-[#49a62c] h-4 w-4 text-xs flex justify-center items-center rounded-full text-white font-semibold'>1</p>
                  </div>
                  <p>Cart</p>
                </li>
              </ul>
            </div>
            <div className='flex gap-4 items-center'>
              <button className='py-2 w-[6rem] border-2 border-[#49a62c] rounded-lg text-[#49a62c] text-sm font-semibold'>Register</button>
              <button className='py-2 w-[6rem] border-2 border-[#49a62c] bg-[#49a62c] text-white rounded-lg text-sm font-semibold'>Login</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav