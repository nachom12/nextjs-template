import { SessionProvider } from 'next-auth/react';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import '../styles/layout/carbon/carbon.scss';

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}