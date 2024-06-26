import React from "react";

interface ExperienceProps {
    img: any
    title: string
    text: string

}

export default function ExperienceCards({ img, title, text }: ExperienceProps) {
    return (
        <>
            <div className="md:w-1/5 p-3 text-center">
                <h2 >
                    <p className="ml-[6.3rem]">
                        {img}
                    </p>
                </h2>
                <p className="text-xl font-semibold pt-4 pb-2">{title}</p>
                <p> {text}</p>
            </div>
        </>
    )
}