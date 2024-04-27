import { add } from "./add";

test("Add function should add two number", () => {
  const result = add(2, 5);
  // Assertion
  expect(result).toBe(7);
});
