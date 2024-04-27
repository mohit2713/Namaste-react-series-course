import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../MockData/mockApiData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantsCards from "../RestaurantsCard";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeTopFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeTopFilter.length).toBe(9);

  const TopRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(TopRatedBtn);

  // screen should load 5 res cards

  const cardsAfterTopRes = screen.getAllByTestId("resCard");
  // console.log(cardsAfterTopRes);

  expect(cardsAfterTopRes.length).toBe(6);
});
