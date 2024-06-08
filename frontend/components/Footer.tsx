import Logo from "./Logo"
import Image from "next/image"
import  Qrcode  from "../public/Qrcode.jpg"
import Appstore from "../public/appstore.jpg"
import Playstore from "../public/playstore.jpg"
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return(
        <>
        <div className="flex flex-col md:flex-row justify-between bg-black text-white md:p-10">
        {/*  */}
        <div className="text-center p-5">
            <Logo />
            <p className="mt-3">Subscribe</p>
            <p className="mt-2 mb-2">Get 20% off your first order</p>
            <div className="ml-[3rem] md:ml-0 p-2 flex border-2 w-4/5 md:w-full">
                <input
                    type="text"
                    className="bg-transparent focus:outline-none"
                    placeholder="Enter your email "
                />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

                </button>
            </div>
        </div>
        {/*  */}
        <div className="flex justify-between p-3 mt-3">
            <div className="w-2/5">
                <h2 className="mb-4">Support</h2>
                <p>111 Sarojini Nagar, Delhi, lndia.</p>
                <p>Sportclub@gmail.com</p>
                <p>88015-88888-9999</p>
            </div>

            <div>
                <h2 className="mb-4">Account</h2>
                <p>My Account</p>
                <p>Login/ Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>

            <div>
                <h2 className="mb-4">Quick Link</h2>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div> 

        </div>
        {/*  */}
        <div className="text-center">
            <h2 className="mb-4">Download App</h2>
            <p>Save $3 with App New User Only</p>
            <div className="flex justify-around m-2 px-[6.5rem]">
                <div >
                <Image src={Qrcode} alt="Qrcode"/>
                </div>
                <div>
                    <Image className="mb-2" src={Appstore} alt="Appstore" />
                    <Image src={Playstore} alt="Playstore" />
                </div>
                
            </div>
            <div>
                <SocialIcon bgColor="transparent" url="https://facebook.com" />
                <SocialIcon bgColor="transparent" url="https://twitter.com" /> 
                <SocialIcon bgColor="transparent" url="https://instagram.com" />
                <SocialIcon bgColor="transparent" url="https://linkedin.com" />
            </div>
        </div>
        </div>
        </>
    )
}