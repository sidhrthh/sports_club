import { LogButton } from "@/components/Button"
import { Input } from "@/components/ui/input";

export default function signin() {
    return (
        <div className="md:flex md:justify-around md:px-20">
            {/* Image */}
            <div className="w-full md:w-1/2 p-5">
                <img
                    className="mx-auto"
                    width={300}
                    src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="sports_random_img"
                />
            </div>

            {/* Form */}
            <div className="md:w-1/2 p-5 md:mt-10">
                <h2 className="text-4xl font-semibold">Log in to Exclusive</h2>
                <p className="text-xl font-medium mt-4 mb-8">Enter your details below</p>
                <form className="space-y-6">
                    <Input type="email" placeholder="Email or Number" className="w-full" />
                    <Input type="password" placeholder="Password" className="w-full" />
                    <div className="flex justify-between mt-5">
                    <LogButton text={"Log in"} />
                   <a href="#"><p className="text-red-400">Format password?</p></a> 
                    </div>
                </form>
            </div>
        </div>
    );
}
