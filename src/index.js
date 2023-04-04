import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../src/utils/redux/reducers";
import DetailWeather from "./routes/DetailWeather";
import WeatherList from "./routes/WeatherList";
import { GlobalStyle } from "./styles/createGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// import dotenv from "dotenv";

// dotenv.config();

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
