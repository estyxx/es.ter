import "../styles.css";

import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Ester Beltrami</title>
        <link rel="icon" href="/favicon.png" />

        <meta name="description" content="" />
      </Head>
      <main>
        <div className="bg-gray-900 text-slate-50">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
