import { expect, test } from "vitest";
import { add } from "../calculator";

test("calculator", () => {
  expect(add(1, 2)).toBe(3);
});
