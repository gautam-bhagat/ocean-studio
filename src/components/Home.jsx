import React from 'react'
import work from '../assests/work.jpg'
import commercialshoot from '../assests/services/commercial-shoot.jpg'
import cocacola from '../assests/logos/cocacola.svg'
import mcdonald from '../assests/logos/mcdonald.svg'
import medium from '../assests/logos/medium.svg'
import quora from '../assests/logos/quora.svg'
import whatsapp from '../assests/logos/whatsapp.svg'

function Home() {
    return (
        <>

            <div className="flex px-10 z-0" style={{ height: '90vh' }}>

                <img src={work} className='z-0' alt='work ' style={{ width: '60vw' }} />

                <div className='flex items-center '>
                    <div className='text-right items-right'>
                        <h1 className='font-bold text-5xl'>TURN YOUR VISION<br /> INTO REALITY</h1>
                        <h3 className='text-3xl'>Your Creative, Media & <br />Technology Transformation Partner</h3>
                        <button className='p-3 text-white bg-gradient-to-b  from-richelectricblue to-oxfordblue  shadow-inner shadow-white ' style={{ borderRadius: 50 }}>
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>

            <section id="about" className="text-white z-10 flex items-center flex-col" style={{ backgroundImage: "url(https://res.cloudinary.com/dmtrqlxe4/image/upload/v1703319646/htsbqvqty1dvmbipdv44.jpg)", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '80vh' }} >

                <h1 className='font-bold text-3xl text-center p-10'>WHO ARE WE?</h1>
                <div className='flex items-center justify-center'>
                    <p className='w-1/2 pb-10 text-center text-xl'>
                        We are Creative Code Productions. We are not going to claim that we are the best video production agency in India or Bangalore. Why? Because it’s not about trying to be the best, but doing the best that we are capable of.
                        Remember when the internet did not rule the world and communication was only partly digital? We have been in the industry since 2011, right before the social media boom. We've grown with the fast-evolving communication forms to understand what keeps your audience engaged.
                        Let’s say you are about to launch a product or brand with a fresh perspective, we are ready to help you identify your Branding Strategy and map out a road to take a course of action, be it online or offline.
                        We add our salt and spice to create visually engaging Corporate & Brand Films, Product Videos, Explainer Videos, TV Commercials, Employer Branding Films, Photoshoots, Designs, Gifs, and every other marketing collateral required for a strong Positioning, Branding, and Marketing presence.
                    </p>
                </div>
            </section>

            <div className='w-full  bg-white' style={{ marginTop: '-45px', borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>

                <section className='m-5 w-5/6 mx-auto' id='services'>
                    <h1 className='text-center p-12  text-3xl font-bold' >Services</h1>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img className="w-2/3 blueshadow rounded-full" src={commercialshoot} alt="" srcset="" />
                            <h2 className='m-2  font-bold text-xl'>Commercial Shoot</h2>
                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img className="w-2/3 blueshadow rounded-full" src={`https://picsum.photos/300/300?grayscale`} alt="" srcset="" />
                            <h2 className='m-2  font-bold text-xl'>Commercial Shoot</h2>
                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img className="w-2/3 blueshadow rounded-full" src={commercialshoot} alt="" srcset="" />
                            <h2 className='m-2  font-bold text-xl'>Commercial Shoot</h2>
                        </div>


                    </div><div className='mt-12 grid grid-cols-2 gap-5'>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img className="w-2/5 blueshadow rounded-full" src={commercialshoot} alt="" srcset="" />
                            <h2 className='m-2  font-bold text-xl'>Commercial Shoot</h2>
                        </div><div className='flex justify-center items-center text-center flex-col item'>
                            <img className="w-2/5 blueshadow rounded-full" src={commercialshoot} alt="" srcset="" />
                            <h2 className='m-2  font-bold text-xl'>Commercial Shoot</h2>
                        </div>

                    </div>
                    <div>

                    </div>
                </section>

                <section className='m-5 w-3/4 mx-auto' id='gallery'>
                    <h1 className='text-center p-12  text-3xl font-bold' >Gallery</h1>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" className='w-full' alt="" srcset="" />

                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" alt="" className='w-full' srcset="" />

                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" alt="" className='w-full' srcset="" />

                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" className='w-full' alt="" srcset="" />

                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" alt="" className='w-full' srcset="" />

                        </div>
                        <div className='flex justify-center items-center text-center flex-col item'>
                            <img src="https://picsum.photos/300/200" alt="" className='w-full' srcset="" />

                        </div>


                    </div>
                </section>

                <section className='m-12 w-3/4 mx-auto' id='client'>
                    <h1 className='text-center p-12  text-3xl font-bold' >Clients</h1>
                    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <img src={cocacola} alt="CocaCola" />
                            </li>
                        
                            <li>
                                <img src={mcdonald} alt="MCDonald" />
                            </li>
                            <li>
                                <img src={medium} alt="Medium" />
                            </li>
                            <li>
                                <img src={quora} alt="Quora" />
                            </li>
                            <li>
                                <img src={whatsapp} alt="Whatsapp" />
                            </li>

                        </ul>
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            <li>
                                <img src={cocacola} alt="CocaCola" />
                            </li>
                        
                            <li>
                                <img src={mcdonald} alt="MCDonald" />
                            </li>
                            <li>
                                <img src={medium} alt="Medium" />
                            </li>
                            <li>
                                <img src={quora} alt="Quora" />
                            </li>
                            <li>
                                <img src={whatsapp} alt="Whatsapp" />
                            </li>

                        </ul>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home
