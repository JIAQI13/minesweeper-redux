import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders without crashing", () => {
  const { getByText } = render(
    <Provider key="1" store={store}>
      <App />
    </Provider>
  );
});
