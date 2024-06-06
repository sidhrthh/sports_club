export default function SearchItem() {
    return (
        <>
            <div className="bg-[#F5F5F5] p-2 flex">
                <input
                    type="text"
                    className="bg-transparent focus:outline-none"
                    placeholder="what are you looking for? "
                />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </>
    )
}