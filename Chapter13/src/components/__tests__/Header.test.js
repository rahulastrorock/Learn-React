import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux"; //used to test components that use redux
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"; //used to test components that use react router

test("logo should load on rendering header", () => {
  //load the header component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo"); //get all elements with the test id logo
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png"); //logo[0] is the first element with the test id logo
});

//test the online status

test("online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});

//test the cart items
test("cart should have 0 items on rendering  header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.textContent).toBe("Cart - 0 items");
});
