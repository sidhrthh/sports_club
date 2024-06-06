import CartSection from "./CartSection";
import LikeSection from "./LikeSection";
import Logo from "./Logo";
import Navitem from "./Navitem";
import SearchItem from "./SearchItem";

export default function Navbar() {
    return (
        <>
            <div className="top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] text-text-primary ">
                {/* logo */}
                <div>
                    <Logo />
                </div>
                {/* nav item */}
                <div>
                    <Navitem />
                </div>
                {/* Right side item */}
                <div className="flex gap-5">
                    <SearchItem />
                    <LikeSection />
                    <CartSection />
                </div>
            </div>
        </>

    )
}