import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "../providers/Layout";
import "../styles/global.css";
import { useApollo } from "../lib/apollo";
import React from "react";
import ComingSoon from "../components/Maintenance/ComingSoon";
import Maintenance from "../components/Maintenance/Maintenance";

const App = ({ Component, pageProps }: AppProps) => {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "soon") {
    return <ComingSoon />;
  } else if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "maintenance") {
    return <Maintenance />;
  } else {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
};
export default App;
