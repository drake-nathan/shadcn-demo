import { useState } from "react";

import Footnote from "./components/Footnote";
import Label from "./components/Label";
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
import { cn } from "./utils";

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto flex h-[75svh] w-1/3 flex-col justify-evenly pb-10">
      <ThemeToggle />

      {/* Direct consumption of pattern */}
      <SelectBasic
        className={cn(value === "eggplant" && "citrus-error")}
        disabled={false}
        footnote="This is a basic usage pattern directly exported."
        label="Direct Component Consumption"
        onValueChange={setValue}
        options={options}
        placeholder="Select a Fruit"
        value={value}
      />

      {/* Atomic usage */}
      <div className="flex flex-col">
        <Label>Atomic Usage</Label>

        <SelectRoot>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Select an Avatar" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem className="h-20" value="cn">
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
          </SelectContent>
        </SelectRoot>

        <Footnote>
          A custom usage, constructing a pattern from atomic exports.
        </Footnote>
      </div>

      {/* Rogue design */}
      <div className="flex flex-col">
        <Label>Rogue Design</Label>

        <SelectRoot>
          <SelectTrigger className="h-8 w-[150px] rounded-md px-2">
            <SelectValue placeholder="Value" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="option 1">Option 1</SelectItem>
              <SelectItem value="option 2">Option 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectRoot>
      </div>
    </div>
  );
}
