import Head from "next/head";
import { HeaderWNavigation } from "../carbon/HeaderWNavigation";
import styles from "../../styles/layout/layout.module.scss";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Next! template</title>
      </Head>
      <HeaderWNavigation />
      <main className={styles.page}>{children}</main>
    </>
  );
}