import Layout from '../components/layout/layout';
import '../styles/globals.css';
import '../styles/layout/carbon/carbon.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}