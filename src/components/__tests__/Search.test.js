import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../MockData/mockApiData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchInputText = screen.getByTestId("searchInputText");

  fireEvent.change(searchInputText, { target: { value: "pizza" } });

  fireEvent.click(searchbtn);

  // screen should load 1 res cards

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(cardsAfterSearch);

  expect(cardsAfterSearch.length).toBe(1);
});
