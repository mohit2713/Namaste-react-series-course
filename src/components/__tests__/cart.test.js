import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA_RESMENU from "../MockData/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_RESMENU),
  })
);

it("should load cart page with items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Pasta (7)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  const Addbtn = screen.getAllByRole("button", { name: "ADD" });
  expect(Addbtn.length).toBe(7);

  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

  fireEvent.click(Addbtn[0]);

  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();

  fireEvent.click(Addbtn[1]);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

  expect(
    screen.getByText("Your Cart is Empty, Add items to the Cart !!!")
  ).toBeInTheDocument();
});
