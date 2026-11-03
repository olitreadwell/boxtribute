import { describe, it, expect, vi } from "vitest";
import { Accordion } from "@chakra-ui/react";
import { render, screen } from "../../tests/testUtils";
import MovedBoxes from "./MovedBoxes";

// The data container issues GraphQL queries and renders nivo charts; only the
// dashboard chrome (the display toggles) is under test here.
vi.mock("../components/visualizations/movedBoxes/MovedBoxesDataContainer", () => ({
  default: () => <div data-testid="moved-boxes-data" />,
}));

function renderMovedBoxes() {
  return render(
    <Accordion defaultIndex={[0]}>
      <MovedBoxes isActive products={[]} categories={[]} tags={[]} />
    </Accordion>,
    {
      routePath: "/bases/:baseId/",
      initialUrl: "/bases/1/",
    },
  );
}

describe("MovedBoxes", () => {
  describe("accessibility of the display controls", () => {
    it("exposes accessible names for the direction and boxes / items toggles", async () => {
      renderMovedBoxes();

      expect(await screen.findByRole("combobox", { name: "Direction" })).toBeInTheDocument();
      expect(await screen.findByRole("combobox", { name: "Display by" })).toBeInTheDocument();
      expect(await screen.findAllByRole("combobox")).toHaveLength(2);
    });
  });
});
