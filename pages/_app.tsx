import { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "mobx-react";
import stores from "../models";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider {...stores}>
      <Component {...pageProps} />
    </Provider>
  );
}
