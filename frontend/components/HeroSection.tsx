import  CarouselImg  from "./CarouselImg";
import {Categories} from "./Categories";

export default function HeroSection() {
    return (
        <>
            {/* left  */}
            <div className="flex md:px-20 flex-col md:flex-row">
                <CarouselImg />
                <Categories />
            </div>
        </>
    )
}