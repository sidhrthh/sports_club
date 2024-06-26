import React from "react";
import Startup from "./images/startup.jpg";
import Image from "next/image";
import ExperienceCards from "./[components]/experience";
import Founders from "./[components]/Founders";
import Steve from "./images/steve.jpg";
import Tony from "./images/tony.jpg";
import Natasha from "./images/natasha.jpg";
import Services from "./[components]/services";

export default function About() {
    return (
        <div>
            <div className="md:py-20 flex flex-col md:flex-row justify-between ">
                <div className="md:w-1/2 md:pl-[13rem] pt-10 p-5 md:p-0 ">
                    <h1 className="font-semibold text-4xl ">Our Story</h1>
                    <p className="pt-5">
                        Steve and Tony loved sports. They started an online shop called "Sports Club" to sell sports things like soccer balls, tennis rackets, and baseball gloves. They worked hard, packing orders and answering questions every day. Soon, kids all over town were playing with their new sports gear.
                    </p>
                    <p className="pt-6">
                        Steve and Tony were happy because they helped kids stay active, have fun, and discover new sports they loved. They dreamed of seeing their shop grow and inspire more children everywhere.
                    </p>
                </div>
                <div>
                    <Image src={Startup} alt="Startup Image" width={600} />
                </div>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col md:flex-row justify-between px-[8rem] mb-20 gap-6">
                <ExperienceCards
                    img={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                    }
                    title="3.5k"
                    text="Sallers active our site"
                />
                <ExperienceCards
                    img={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    }
                    title="10k"
                    text="Monthly Product Sale"
                />
                <ExperienceCards
                    img={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    }
                    title="20K"
                    text="Customer active in our site"
                />
                <ExperienceCards
                    img={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                    }
                    title="15k"
                    text="Annual gross sale in our site"
                />
            </div>
            {/* Founders */}
            <div className="flex  flex-col md:flex-row justify-between px-[8rem] ">
                <Founders 
                    img={Steve}
                    name="Steve Rogers"
                    role="Founder & Chairman"
                />
                <Founders
                    img={Tony}
                    name="Tony Stark"
                    role="Product Manager"
                />
                <Founders 
                    img={Natasha}
                    name="Natasha Romanoff"
                    role="Marketing"
                />
            </div>

            {/* Services */}
            <div className="flex  flex-col md:flex-row justify-between md:px-[10rem] px-[9em] text-center mb-20 mt-10">
            <Services 
            img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full md:ml-[6.5rem] ml-[6rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              }
            heading="Free and Fast Delivery "
            text="Free delivery for all orders over 1000"
            />
            <Services 
            img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full md:ml-[6.5rem] ml-[6rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              }
              heading="24/7 Customer Services"
              text="Friendliy 24/7 customer servies"
            />
            <Services
            img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14 text-white bg-black p-3 rounded-full md:ml-[6.5rem] ml-[6rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
            </svg>}
            heading="Money back Guarantee"
            text="We'll return your money within 30 days"
            />
            </div>
        </div>
    );
}
