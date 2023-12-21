import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { MasterProvider } from "./context/MasterContext";
import useRouteElements from "./routes/useRouteElements";
import theme from "./theme";
import React from "react";
import { LoadingProvider } from "./provider/loading.provider";
import { LoadingModule } from "./components/Loading";
import { APIProvider } from "@vis.gl/react-google-maps";
import { PROCESS_ENV } from "./constants/env";

export default function App() {
  const queryClient = new QueryClient();
  const routeElements = useRouteElements();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <APIProvider apiKey={PROCESS_ENV.GOOGLE_KEY}>
            <MasterProvider>
              <LoadingProvider>
                <LoadingModule />
                {routeElements}
              </LoadingProvider>
            </MasterProvider>
          </APIProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
