import Image from "next/image";


interface FounderProps {
    img: any;
    name: string;
    role: string;
}

const Founders = ({ img, name, role } :FounderProps ) => {
    return (
        <div className="p-10">
            <Image src={img} alt={`${name} image`} width={300} />
            <p className="text-2xl font-semibold pt-3 pb-1">{name}</p>
            <p>{role}</p>
        </div>
    );
};

export default Founders;
