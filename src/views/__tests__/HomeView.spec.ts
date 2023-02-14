import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import HomeView from "../HomeView.vue";

describe("HomeView", async () => {
  it("should display 'Hello world' on load", () => {
    const { getByRole } = render(HomeView);

    getByRole("heading", { name: "Hello world" });
  });

  //   it("should display 'Hola Human' on button click", async () => {
  //     const user = userEvent.setup();
  //     const { getByRole, findByRole } = render(HomeView);
  //     const button = getByRole("button", { name: "Toggle Message" });

  //     user.click(button);

  //     await findByRole("heading", { name: "Hola Human" });
  //   });
});
