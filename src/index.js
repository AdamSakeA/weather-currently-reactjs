import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../src/utils/redux/reducers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailWeather from "./routes/DetailWeather";
import WeatherList from "./routes/WeatherList";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weather/:id",
    element: <DetailWeather />,
  },
  {
    path: "/weather/:nation/list",
    element: <WeatherList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
