import CartSection from "./CartSection";
import LikeSection from "./LikeSection";
import Logo from "./Logo";
import Navitem from "./Navitem";
import SearchItem from "./SearchItem";

export default function Navbar() {
    return (
        <>
            <div className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl items-center justify-between border-b border-gray-100 bg-background p-[2em] text-text-primary">
                {/* Logo */}
                <div>
                    <Logo />
                </div>
                {/* Mobile right side items */}
                <div className="flex gap-5 md:hidden">
                    <SearchItem />
                    <LikeSection />
                    <CartSection />
                </div>
                {/* Nav item */}
                <div>
                    <Navitem />
                </div>
                {/* Desktop right side items */}
                <div className="hidden md:flex gap-5">
                    <SearchItem />
                    <LikeSection />
                    <CartSection />
                </div>
            </div>
        </>
    )
}
