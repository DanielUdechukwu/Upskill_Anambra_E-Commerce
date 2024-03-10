import { useState } from "react"
import Nav from "../components/Nav"
import CaretLeft from '../assets/homepage/caret-left.svg'
import CaretRight from '../assets/homepage/caret-right.svg'
import PopularItems from '../utils/popular'
import ExtraPopular from '../utils/extraPopular'
import ExtraPopular2 from '../utils/extraPopular2'
import Sponsors from '../utils/sponsors'
import Bag from '../assets/homepage/bag.svg'
import BeefRuti from '../assets/homepage/beef-ruti.png'
import Heart from '../assets/homepage/like.svg'
import Stars from '../assets/homepage/stars.svg'
import Logout from '../assets/homepage/logout.svg'
import KFC from '../assets/homepage/kfc.png'
import Testimony from '../assets/homepage/testimonial.png'
import Footer from "../components/Footer"


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectPopularItem, setSelectPopularItem] = useState();
  const [selectExtraItem, setSelectExtraItem] = useState();
  const [selectExtraItem2, setSelectExtraItem2] = useState();

  const scrollToLeft = () => {
    const carousel = document.querySelector('.CAROUSEL');
    carousel.scrollLeft -= 100; // Adjust this value according to your needs
  };

  const scrollToRight = () => {
    const carousel = document.querySelector('.CAROUSEL');
    carousel.scrollLeft += 100; // Adjust this value according to your needs
  };

  const SelectItem = (index) => {
    setSelectPopularItem(index)
    console.log(selectPopularItem)
  }

  const SelectExtra = (index) => {
    setSelectExtraItem(index)
    console.log(selectExtraItem)
  }

  const SelectExtra2 = (index) => {
    setSelectExtraItem2(index)
  }

  return (
    <>
      <section>
        <Nav />

        <section className="HERO bg-hero-bg ">
          <div className="w-[90%] mx-auto py-16">
            <h3 className="xl:text-[2.5rem] md:text-[1.8rem] sm:text-[2rem] text-white text-center mx-auto font-bold xl:w-[60%] lg:w-[80%] sm:w-full">Taste the Difference: <span className="text-[#49a62c]">Welcome to TASTE HEAVEN</span></h3>

            <div className="flex justify-between items-center my-3">
              <img onClick={scrollToLeft} className="xl:p-4 md:p-3 sm:p-1 md:w-[3rem] sm:w-[2.5rem] border-2 border-white rounded-full cursor-pointer" src={CaretLeft} alt="" />
              <div className="CAROUSEL xl:w-[60%] lg:w-[80%] sm:w-full flex overflow-x-scroll">
                <div className="w-full">
                  <p className="text-center text-white xl:text-[1.5rem] md:text-[1.2rem] font-semibold">
                    Delight your senses with our flavorful dishes, warm atmosphere, and impeccable service. Join us for a memorable dining adventure today.
                  </p>
                </div>
              </div>
              <img onClick={scrollToRight} className="xl:p-4 md:p-3 sm:p-1 md:w-[3rem] sm:w-[2.5rem] border-2 border-white rounded-full cursor-pointer" src={CaretRight} alt="" />
            </div>
                  
            <div className='flex gap-4 items-center justify-center mt-6'>
              <button className='py-2 w-[9rem] border-2 border-[#49a62c] rounded-lg text-[#49a62c] md:text-sm sm:text-xs font-semibold'>SHOP NOW</button>
              <button className='py-2 w-[9rem] border-2 border-[#49a62c] bg-[#49a62c] text-white rounded-lg md:text-sm sm:text-xs font-semibold'>LEARN MORE</button>
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f8]">
          <div className="w-[90%] mx-auto py-6">
            <p className="text-[.9rem] text-[#49a62c] font-semibold">CRISPY, EVERY BITE TASTE</p>
            <div className="flex justify-between items-center">
              <p className="lg:text-[1.8rem] sm:text-[1.3rem] font-semibold">POPULAR FOOD ITEMS</p>
              <div className="flex items-center gap-6">
                <div className="border border-[#49a62c] rounded-full xl:p-2 md:p-1">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7538 9.14209L5.39587 18.5L14.7538 27.8579" stroke="#49a62c" stroke-width="2.3125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.6042 18.5H5.65796" stroke="#49a62c" stroke-width="2.3125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="border bg-[#49a62c] border-[#49a62c] rounded-full xl:p-2 md:p-1">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2462 9.14209L31.6041 18.5L22.2462 27.8579" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.39587 18.5H31.3421" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center xl:gap-16 lg:gap-8 md:gap-6 gap-5 overflow-x-scroll mt-[4rem] mb-4 w-full pb-8 scrollbar">
              {PopularItems.map((items, index) => {
                const {id, itemIMG, item} = items;

                return (
                  <div key={index} className={`${selectPopularItem === index ? 'bg-[#ea9e3a]' : 'bg-white'} rounded-lg xl:min-w-[25%] md:min-w-[35%] min-w-[40%] min-h-[22rem]`} onClick={() => SelectItem(index)}>
                    <div className="flex justify-center">
                      <img className="w-[15rem] h-[15rem] p-4 mb-3" src={itemIMG} alt="" />
                    </div>
                    <div className={`${selectPopularItem === index ? 'bg-white' : 'bg-[#ea9e3a]'} LINE h-1 w-[5rem] mx-auto rounded-lg`}></div>
                    <p className={`${selectPopularItem === index ? 'text-white' : 'text-black'} text-[1.2rem] font-semibold w-[50%] mx-auto text-center my-5`}>{item}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f8]">
          <div className="w-[90%] mx-auto pb-6">
            <p className="text-[.9rem] text-[#49a62c] font-semibold">HAPPY SPONSORS WITH US</p>
            <div className="my-3 py-4 md:flex grid grid-cols-3 grid-rows-2 items-center xl:gap-[5.5rem] lg:gap-[3rem] md:gap-[2.5rem] overflow-x-scroll scrollbar">
              {Sponsors.map((item, index) => {
                const {imgURL} = item;
                
                return (
                  <div className="xl:min-w-[9rem] md:min-w-[4rem] flex justify-center" key={index}>
                    <img src={imgURL} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-friday-bg py-12">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="text-white">
              <p className="md:text-[.9rem] text-[.7rem] font-normal">🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
              <p className="md:text-[1.6rem] text-[1.3rem] w-[60%] md:w-full font-semibold my-3">A Sizzling Deal <span className="text-[#ea9e3a]">You Can't</span> Miss!</p>
              <p className="text-[.9rem] font-normal">GRILLED CHIKEN $59,00</p>
              <button className="flex items-center gap-2 bg-[#ea9e3a] my-4 py-3 px-4 text-[.9rem] font-semibold rounded-lg">
                <img className="h-5" src={Bag} alt="" />
                <p>Order Now</p>
              </button>
            </div>
            <div className="md:w-[14rem] w-[10rem]">
              <img src={BeefRuti} alt="" />
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f8]">
          <div className="w-[90%] mx-auto py-12">
            <p className="text-[.9rem] text-[#49a62c] font-semibold text-center">CRISPY, EVERY BITE TASTE</p>
            <p className="md:text-[1.8rem] text-[1.3rem] font-semibold text-center">POPULAR FOOD ITEMS</p>
            
            <div className="flex xl:gap-16 lg:gap-8 md:gap-6 gap-5 scrollbar pb-4 mt-16 items-center overflow-x-scroll">
              {ExtraPopular.map((items, index) => {
                const {item, itemIMG, price, prevPrice} = items;

                return (
                  <div key={index} className="xl:min-w-[25%] lg:min-w-[30%] md:min-w-[35%] min-w-[40%]" onClick={() => SelectExtra(index)}>
                    <div className={`${selectExtraItem === index ? 'bg-[#ea9e3a]' : 'bg-white'} rounded-lg mb-2 lg:h-[25rem] md:h-[22rem] h-[20rem]`}>
                      <div className="relative lg:h-[20rem] md:h-[18rem] h-[16rem] flex items-center justify-center">
                        <img className="w-[15rem] md:mx-4 md:px-1 px-6" src={itemIMG} alt="" />
                        <img className="absolute top-3 left-3 h-8" src={Heart} alt="" />
                      </div>
                      <div className="w-[full] lg:mt-5 md:mt-2 flex justify-center">
                        <button className={`${selectExtraItem === index ? '' : 'hidden'} py-3 px-3 bg-[#433d3d] text-[.8rem] rounded-lg text-white font-semibold`}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <p className="text-[.9rem] font-semibold mb-3">{item}</p>
                    <img className="h-5 mb-3" src={Stars} alt="" />
                    <div className="flex items-baseline gap-2 mt-3">
                      <p>{price}</p>
                      <p className="line-through text-[.8rem]">{prevPrice}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex xl:gap-16 lg:gap-8 md:gap-6 gap-5 scrollbar pb-4 mt-16 items-center overflow-x-scroll">
              {ExtraPopular2.map((items, index) => {
                const {item, itemIMG, price, prevPrice} = items;

                return (
                  <div key={index} className="xl:min-w-[25%] lg:min-w-[30%] md:min-w-[35%] min-w-[40%]" onClick={() => SelectExtra2(index)}>
                    <div className={`${selectExtraItem2 === index ? 'bg-[#ea9e3a]' : 'bg-white'} rounded-lg mb-2 lg:h-[25rem] md:h-[22rem] h-[20rem]`}>
                      <div className="relative lg:h-[20rem] md:h-[18rem] h-[16rem] flex items-center justify-center">
                        <img className="w-[15rem] md:mx-4 md:px-1 px-6" src={itemIMG} alt="" />
                        <img className="absolute top-3 left-3 h-8" src={Heart} alt="" />
                      </div>
                      <div className="w-[full] lg:mt-5 md:mt-2 flex justify-center">
                        <button className={`${selectExtraItem2 === index ? '' : 'hidden'} py-3 px-3 bg-[#433d3d] text-[.8rem] rounded-lg text-white font-semibold`}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <p className="text-[.9rem] font-semibold mb-3">{item}</p>
                    <img className="h-5 mb-3" src={Stars} alt="" />
                    <div className="flex items-baseline gap-2 mt-3">
                      <p>{price}</p>
                      <p className="line-through text-[.8rem]">{prevPrice}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-[90%] mx-auto flex justify-center pb-14">
            <button className="flex gap-2 items-center justify-center bg-[#433d3d] py-2 px-2 rounded-lg text-white text-[.8rem] font-semibold">
              <p>View More</p>
              <img src={Logout} alt="" />
            </button>
          </div>
        </section>

        <section>
          <div className="md:flex flex-col items-center">
            <div className="bg-kfc-bg bg-no-repeat bg-center bg-cover md:w-1/2 w-full py-16 flex justify-center items-center">
              <img className="lg:w-[20rem] md:w-[15rem] w-[17rem]" src={KFC} alt="" />
            </div>
            <div className="md:w-1/2 w-full text-center lg:mt-8 md:mt-10">
              <p className="text-[.9rem] text-[#49a62c] font-semibold text-center">CRISPY, EVERY BITE TASTE</p>
              <p className="xl:text-[1.8rem] lg:text-[1.4rem] md:text-[1.2rem] font-semibold text-center lg:w-[70%] md:w-[90%] mx-auto mt-8">TASTE HEAVEN CHIKEN HOT WING & FRENCH FRIES</p>
              <div className="flex justify-center my-3">
                <button className="flex items-center gap-2 bg-[#49a62c] my-4 py-3 px-4 text-[.9rem] font-semibold rounded-lg text-white">
                  <img className="h-5" src={Bag} alt="" />
                  <p>Order Now</p>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-Testimonial flex flex-col items-center justify-center lg:py-16 md:py-8">
            <p className="text-[1rem] text-[#49a62c] font-semibold text-center mt-8">What our clients say about us</p>
            <p className="text-[1.8rem] font-semibold text-center w-[70%] mx-auto mt-3">TESTIMONIAL</p>
            <div className="lg:w-[60%] md:w-[80%] mx-auto flex flex-col items-center">
              <p className="text-[.9rem] font-semibold mt-3 text-center">“THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE SAY IT’S THE BEST MEAL I HAVE HAD IN QUITE SOME TIME. WILL DEFINITELY BE SEEING MORE EATING REGULARLY.”</p>
              <div className="mt-3 flex flex-col items-center">
                <img src={Testimony} alt="" />
                <p className="text-[#EA9E3A] text-[.9rem] font-semibold">Peter Bowman</p>
                <p className="font-semibold text-[.9rem]">Avatech CEO & Co Founder</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}

export default Home