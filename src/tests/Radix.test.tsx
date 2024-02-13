import { render } from "@testing-library/react";

import { type Option, SelectBasic } from "../components/select";

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

// eslint-disable-next-line jest/expect-expect
test("1000 Select renders", () => {
  const start = performance.now();

  const arr = Array.from({ length: 1000 }, (_, i) => i);
  const jsx = arr.map((i) => (
    <SelectBasic
      disabled={false}
      footnote="This is a basic usage pattern directly exported."
      id={`select-${i}`}
      key={i}
      label="Direct Component Consumption"
      onValueChange={() => undefined}
      options={options}
      placeholder="Select a Fruit"
      value={""}
    />
  ));

  render(jsx);

  const end = performance.now();
  console.log(`Rendering 1000 components took ${end - start} ms`);
});
