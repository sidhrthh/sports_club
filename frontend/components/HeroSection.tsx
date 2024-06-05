import  CarouselImg  from "./CarouselImg";
import Categories from "./Categories";

export default function HeroSection() {
    return (
        <>
            {/* left  */}
            <div className="flex px-20">
                <Categories />
                <CarouselImg />

            </div>
        </>
    )
}