import type { SelectProps as RadixSelectProps } from "@radix-ui/react-select";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "@/components/select/shadcn";
import { cn } from "@/utils";

import Footnote from "../Footnote";
import Label from "../Label";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends RadixSelectProps {
  className?: string;
  footnote?: string;
  label?: string;
  options: Option[];
  placeholder?: string;
}

const SelectBasic = ({
  className,
  disabled,
  footnote,
  label,
  options,
  placeholder,
  ...props
}: SelectProps): React.JSX.Element => {
  return (
    <div
      className={cn("flex w-[300px] flex-col gap-1", className)}
      data-automation-id="select-basic-container"
    >
      {label && <Label>{label}</Label>}

      <SelectRoot {...props}>
        <SelectTrigger
          className={className?.includes("citrus-error") ? "citrus-error" : ""}
          disabled={disabled}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>

      {footnote && <Footnote>{footnote}</Footnote>}
    </div>
  );
};

export default SelectBasic;
