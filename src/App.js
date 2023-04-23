import React from "react";
import Home from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styled components
import { GlobalStyle } from "./styles/createGlobal";
import { ThemeProvider } from "styled-components";
import { THEME } from "./styles/theme";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

// pages
import DetailWeather from "./pages/weather";
import NationPage from "./pages/country";
import NotFound from "./pages/_notfound";
import SearchPage from "./pages/search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country",
    element: <NationPage />,
  },
  {
    path: "/weather/:cityName/:countryCode",
    element: <DetailWeather />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <GlobalStyle />
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
