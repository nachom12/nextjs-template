import Head from "next/head";
import Header from "./header";
import styles from "../../styles/layout/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next! template</title>
      </Head>
      <Header />
      <main className={styles.page}>{children}</main>
    </>
  );
}