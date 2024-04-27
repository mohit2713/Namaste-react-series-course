import { render, screen } from "@testing-library/react";
import RestaurantsCards from "../RestaurantsCard";
import MOCK__RES from "../MockData/rescardMock.json";
import "@testing-library/jest-dom";
import WithPromotedLabel from "../RestaurantsCard";

test("should load restaurant card", () => {
  render(<RestaurantsCards resData={MOCK__RES} />);

  const data = screen.getByText("Burger Seigneur");

  expect(data).toBeInTheDocument();
});

test("should load the withPromotedLabel component", () => {
  render(<WithPromotedLabel resData={MOCK__RES} />);

  const data = screen.getByText("Burger Seigneur");

  expect(data).toBeInTheDocument();
});
