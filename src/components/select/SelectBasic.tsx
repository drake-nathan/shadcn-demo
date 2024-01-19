import type { SelectProps as RadixSelectProps } from "@radix-ui/react-select";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "@/components/select/shadcn";
import { cn } from "@/utils";

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends RadixSelectProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  warning?: boolean;
}

const SelectBasic = ({
  label,
  options,
  placeholder,
  warning,
  ...props
}: SelectProps): React.JSX.Element => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className={cn("w-[250px]", warning && "warning")}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

export default SelectBasic;
