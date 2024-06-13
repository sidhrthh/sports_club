import React from "react";

interface ServicesProps {
    img : any 
    heading : string
    text : string
}

export default function Services({img , heading , text} : ServicesProps) {
    return (
        <>
            <div className="pt-10">
                {img}
                <p className="text-2xl font-semibold mt-5 mb-1"> {heading}</p>
                <p>{text}</p>

            </div>
        </>
    )
}