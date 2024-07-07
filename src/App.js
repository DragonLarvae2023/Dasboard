import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import { ColorModeContext, useMode } from "./global/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
const App = () => {
  const [mode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <RouterProvider router={routes} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
ReactDOM.createRoot(document.getElementsByTagName("body")[0]).render(<App />);
export default App;
