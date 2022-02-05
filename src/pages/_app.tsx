import type {AppProps} from "next/app";
import Head from "next/head";
import {Provider} from "react-redux";

import "../css/index.css";
import store from "../app/store";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Basement Supply</title>
          <meta content="Coding challenge for basement.studio." name="description" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default App;
