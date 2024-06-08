"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categoriesItems = [
  {
    value: "Equipment",
    label: "Equipment",
  },
  {
    value: "Accessories",
    label: "Accessories",
  },
  {
    value: "Fitness Gear",
    label: "Fitness Gear",
  },
  {
    value: "Outdoor Gea",
    label: "Outdoor Gea",
  },
  {
    value: "Nutrition & Supplements",
    label: "Nutrition & Supplements",
  },
  {
    value: "Protective Gear",
    label: "Protective Gear",
  },
  {
    value: "Bags & Backpacks",
    label: "Bags & Backpacks",
  },
  {
    value: "Technology & Gadgets",
    label: "Technology & Gadgets",
  },
  {
    value: "Recovery & Wellness",
    label: "Recovery & Wellness",
  }
]

export function Categories() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  
    return(
        <>
        <div className="hidden sm:block">
                    <ul className="md:border-r-2 md:border-gray-100 flex flex-col  items-center w-[300px] leading-9 text-lg pt-3 ">
                        <li className="hover:pl-4"><a href="#">Equipment</a></li>
                        <li className="hover:pl-4 "><a href="#" >Accessories</a></li>
                        <li className="hover:pl-4"><a href="#">Fitness Gear</a></li>
                        <li className="hover:pl-4"><a href="#">Outdoor Gear</a></li>
                        <li className="hover:pl-4"><a href="#">Nutrition & Supplements</a></li>
                        <li className="hover:pl-4"><a href="#">Protective Gear</a></li>
                        <li className="hover:pl-4"><a href="#">Bags & Backpacks</a></li> 
                        <li className="hover:pl-4"><a href="#">Technology & Gadgets</a></li>
                        <li className="hover:pl-4"><a href="#">Recovery & Wellness</a></li>
                    </ul>
                </div>
    

    <div className="block sm:hidden m-10 text-center">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categoriesItems.find((item) => item.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categoriesItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
    </>
  )
}
