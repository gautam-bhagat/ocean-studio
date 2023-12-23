import React from 'react'
import work from '../assests/work.jpg'
import oceanbg from '../assests/ocean-bg.jpg'

function Home() {
    return (
        <>

            <div className="flex px-10 z-0" style={{ height: '90vh' }}>

                <img src={work} className='z-0' style={{ width: '60vw' }} />

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

            <section id="about" className="text-white z-10 flex items-center flex-col" style={{ backgroundImage: "url(" + "https://res.cloudinary.com/dmtrqlxe4/image/upload/v1703319646/htsbqvqty1dvmbipdv44.jpg" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'80vh'}} >

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

        </>
    )
}

export default Home
