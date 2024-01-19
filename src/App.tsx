import { useState } from "react";

import {
  type Option,
  SelectBasic,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import ThemeToggle from "./components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

export default function App() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="mx-auto flex h-svh w-1/3 flex-col justify-evenly bg-background pb-40">
      <div className="flex gap-4">
        <SelectBasic
          label="Fruit"
          onValueChange={setValue}
          options={options}
          placeholder="Select a Fruit"
          value={value}
          warning={value === "eggplant"}
        />
        <ThemeToggle />
      </div>

      <SelectRoot>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select an Avatar" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="cn">
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SelectItem>
            <SelectItem value="this dude">
              <Avatar className="size-6">
                <AvatarImage src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </div>
  );
}
