import "../styles/globals.css";
import "../styles/Sidebar.css";
import "../styles/Index.css";
import "../styles/Login.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
