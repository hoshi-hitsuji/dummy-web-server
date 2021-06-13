import { AppProps } from "next/app";
import "../global.css";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default App;