import { Button } from "@/components/ui/button";

interface ButtonProps {
  text: string;
}

export default function ButtonDemo({ text }: ButtonProps) {
  return <Button className=" bg-red-400 w-full mt-10 hover:bg-red-300">{text}</Button>;
}
