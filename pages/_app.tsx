import { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { withApollo } from "../lib/withApollo";
import Layout from "../providers/Layout";
import "../styles/global.css";

type MyAppProps = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
} & AppProps;
const App: React.FC<MyAppProps> = ({ Component, pageProps, apolloClient }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};
export default withApollo(App);
