import { Button } from "@/components/ui/button";

interface CreateButtonProp {
  text: string;
}


export function CreateButton({ text }: CreateButtonProp) {
  return <Button className=" bg-red-400 w-full mt-10 hover:bg-red-300">{text}</Button>;
}

export function LogButton({text} : CreateButtonProp) {
  return <Button className=" bg-red-400 w-[200px] hover:bg-red-300">{text}</Button>;
}