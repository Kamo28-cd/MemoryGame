import { SWRConfig } from "swr";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import fetcher from "@utils/functions/fetcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ dedupingInterval: 5000, fetcher: fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
