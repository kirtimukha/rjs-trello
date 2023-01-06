import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import AppSetSelector from './App-set-selector';
import {QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <AppSetSelector/>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
reportWebVitals();