import globalStyles from "theme/global";
import Layout from "components/layout";
import "typeface-poppins";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
