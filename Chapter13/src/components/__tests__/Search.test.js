import Body from "../Body";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux"; //used to test components that use redux
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"; //used to test components that use react router
import { restaurantData } from "../../mocks/data";
import { screen, waitFor } from "@testing-library/react"; //used to test components that use react router

//global.fetch is used to mock the fetch api, because the fetch api is not available in jest
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantData);
    },
  });
});

//testing is shimmer is loading on homepage
test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const search = body.getByTestId("shimmer");
  expect(search).toBeInTheDocument();
});

//testing if restaurant is loading on homepage
test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15); //15 is the number of restaurants in the mock data
});
