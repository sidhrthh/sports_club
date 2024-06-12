import  CarouselImg  from "./CarouselImg";
import {Categories} from "./Categories";
import Product_section from "./Product_section"

export default function HeroSection() {
    return (
        <>
            {/* left  */}
            <div className="flex md:px-20 flex-col md:flex-row">
                <CarouselImg />
                <Categories />
            </div>
                <Product_section />
        </>
    )
}