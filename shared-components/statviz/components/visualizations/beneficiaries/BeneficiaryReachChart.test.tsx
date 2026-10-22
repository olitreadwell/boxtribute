import { describe, it, expect, vi, beforeEach } from "vitest";
import { format, subMonths } from "date-fns";
import { render, screen } from "../../../../tests/testUtils";
import BeneficiaryReachChart from "./BeneficiaryReachChart";
import { DEFAULT_BENEFICIARY_FILTERS } from "../../../utils/dashboardFilters";
import type { BeneficiaryReachData } from "../../../../../graphql/types";

// Mock the nivo bar chart so the test does not depend on SVG rendering or
// ResizeObserver support in jsdom.
vi.mock("../../nivo/BarChart", () => ({
  default: () => <div data-testid="reach-bar-chart" />,
}));

const oneMonthAgo = format(subMonths(new Date(), 1), "yyyy-MM-dd");
const twoMonthsAgo = format(subMonths(new Date(), 2), "yyyy-MM-dd");

const reachData = {
  facts: [
    { reachedOn: oneMonthAgo, beneficiaryId: 1, reachType: "FREESHOP", count: 2 },
    { reachedOn: twoMonthsAgo, beneficiaryId: 2, reachType: "FREESHOP", count: 3 },
  ],
  dimensions: {
    beneficiary: [
      { id: 1, age: 5, gender: "Male", tagIds: [] },
      { id: 2, age: 30, gender: "Female", tagIds: [] },
    ],
  },
} as unknown as BeneficiaryReachData;

function renderChart() {
  return render(
    <BeneficiaryReachChart reachData={reachData} appliedFilters={DEFAULT_BENEFICIARY_FILTERS} />,
    {
      routePath: "/bases/:baseId/",
      initialUrl: "/bases/1/",
    },
  );
}

describe("BeneficiaryReachChart", () => {
  beforeEach(() => {
    // Suppress console.error noise from the Apollo MockedProvider wrapper.
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("gives the metric and breakdown selects accessible names", () => {
    renderChart();

    expect(screen.getByRole("combobox", { name: "Metric" })).toHaveValue("unique");
    expect(screen.getByRole("combobox", { name: "Breakdown by" })).toHaveValue("age");
  });

  it("gives the date range inputs accessible names", () => {
    renderChart();

    expect(screen.getByLabelText("From date")).toBeInTheDocument();
    expect(screen.getByLabelText("To date")).toBeInTheDocument();
  });
});
